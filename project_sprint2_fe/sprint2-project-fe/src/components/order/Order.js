import {Header} from "../homepages/Header";
import {Footer} from "../homepages/Footer";
import {NavLink, useNavigate} from "react-router-dom";
import * as cartService from "../../service/cartService"
import {useEffect, useState} from "react";
import * as userService from "../../service/userService";
import * as loginService from "../../service/loginService";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {getAll} from "../redux/middleaware/CartMiddleaware";
import Paypal from "../paypal/Paypal";
import * as productService from "../../service/productService";


export function Order() {
    const [cartDetailList, setCartDetailList] = useState([]);
    const [userLogin, setUserLogin] = useState({});
    let sum = 0;
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    const jwtId = loginService.getAccessTokenId();
    const [show, setShow] = useState(false);
    const role = loginService.getRole();
    const navigate = useNavigate();


    useEffect(() => {
        getUserByAccountId();
    }, [show]);

    const getUserByAccountId = async () => {
        const result = await userService.getUserByAccountId(jwtId);
        if (result) {
            setUserLogin(result.data);
            getCartDetail(result.data.id);
            console.log(role)
        }

    }

    const handleIncreaseQuantity = async (cartId) => {
        const cartResult = await cartService.getCartByCartId(cartId);
        console.log(cartResult)
        let value = {
            id: cartResult.data.id,
            quantity: cartResult.data.quantity + 1,
            productId: cartResult.data.product.id,
            userId: cartResult.data.user.id
        };
        if (value.quantity > cartResult.data.product.quantity) {
            toast.error("Đã vượt quá hàng tồn kho")
        } else {
            const request = await cartService.updateQuantityCart(value.id, value);
            if (request.status === 200) {
                toast.success("Thành công")
                getCartDetail(userLogin.id);
            } else {
                toast.error("Thất bại")
            }
        }
    }

    const handleDecreaseQuantity = async (cartId) => {
        const cartResult = await cartService.getCartByCartId(cartId);
        console.log(cartResult)
        let value = {
            id: cartResult.data.id,
            quantity: cartResult.data.quantity - 1,
            productId: cartResult.data.product.id,
            userId: cartResult.data.user.id
        };
        if (value.quantity <= 0) {
            toast.error("Không thể giảm được")
        } else {
            const request = await cartService.updateQuantityCart(value.id, value);
            if (request.status === 200) {
                toast.success("Thành công")
                getCartDetail(userLogin.id);
            } else {
                toast.error("Thất bại")
            }
        }
    }

    const getCartDetail = async (userId) => {
        if (userId) {
            const result = await cartService.getCartByUserId(userId);
            console.log(result);
            setCartDetailList(result.data);
        }

    }

    // const handleModal = async () => {
    //     let hasError = false;
    //     cartDetailList.map((item) =>{
    //         let productQuantity = productService.getProductDetail(item.productId);
    //         if (productQuantity.quantity <item.quantity){
    //             hasError = true;
    //             toast.error("Sản phẩm đã có người mua")
    //             deleteToCart(item.cartId)
    //         }
    //     })
    //     if (!hasError){
    //         setShow(true);
    //     }
    // }
    const handleModal = async () => {
        let hasError = false;
        for (const item of cartDetailList) {
            const productDetail = await productService.getProductDetail(item.productId);
            if (productDetail.data.quantity < item.quantity) {
                hasError = true;
                toast.warn("Sản phẩm đã có người mua");
                deleteToCart(item.cartId);
            }
        }
        if (!hasError) {
            setShow(true);
        }
    };


    const closeModal = async () => {
        setShow(false);

    }

    const deleteToCart = async (id) => {
        const result = await cartService.deleteToCart(id);
        if (result.status === 200) {
            toast.success("Xoá thành công")
            getUserByAccountId()
            dispatch(getAll(userLogin.id))

        } else {
            toast.error("Không xoá được")
        }
    }

    if (cartDetailList) {
        cartDetailList.map(item => {
            sum += (item.priceSale * item.quantity);
        })
    }


    return (
        <div>
            <Header/>
            {jwtId ? (<div>
                <div className="container-fluid big-padding about-cover">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <table className="table bg-white shadow-md table-hover">
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th>STT</th>
                                        <th>Hình ảnh</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Giá</th>
                                        <th>Tổng</th>
                                        <th></th>
                                    </tr>
                                    </thead>

                                    {cartDetailList.length > 0 ?
                                        (<tbody>
                                        {cartDetailList.map((item, index) =>
                                            <tr key={index} className="align-middle"
                                                style={{alignItems: "center"}}>
                                                <td>
                                                    <div className="form-check"
                                                         style={{display: "flex", justifyContent: "center"}}>
                                                        <input className="form-check-input" type="checkbox"
                                                               value=""
                                                        />
                                                    </div>
                                                </td>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img className="max-100" src={item.images} alt=""/>
                                                </td>
                                                <td>{item.productName}</td>
                                                <td>
                                                    <button type={"button"}
                                                            className={"btn btn-outline-dark btn-sm m-r-3"}
                                                            onClick={() => handleDecreaseQuantity(item.cartId)}
                                                    >
                                                        <i className="fa-solid fa-minus"
                                                           style={{
                                                               display: "flex",
                                                               justifyContent: "center"
                                                           }}></i>
                                                    </button>
                                                    {item.quantity}
                                                    <button type={"button"}
                                                            className={"btn btn-outline-success btn-sm m-l-3"}
                                                            onClick={() => handleIncreaseQuantity(item.cartId)}>
                                                        <i className="fa-solid fa-plus"
                                                           style={{
                                                               display: "flex",
                                                               justifyContent: "center"
                                                           }}></i>
                                                    </button>
                                                </td>
                                                <td>{new Intl.NumberFormat('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(item.priceSale)}</td>
                                                <td>{new Intl.NumberFormat('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(item.priceSale * item.quantity)}</td>
                                                <td>
                                                    <button className="btn btn-xs pt-2 btn-danger"
                                                            onClick={() => deleteToCart(item.cartId)}><i
                                                        className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )}
                                        </tbody>) :

                                        (<td colSpan={8} style={{textAlign: "center"}}><h3>Không có sản phẩm
                                            nào</h3></td>)}
                                </table>

                            </div>
                            {cartDetailList.length > 0 ? (<div className="col-md-4 mx-auto">
                                <div className="align-middle" style={{backgroundColor: "white"}}>
                                    <table className={"table bg-white shadow-md table-hover"}>
                                        <thead>
                                        <tr>
                                            <th>Giao đến:</th>
                                            <th>
                                                <NavLink to={""} style={{color: "blue", fontSize: "18px"}}>
                                                    Thay đổi
                                                </NavLink>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><b>Tên:</b>{userLogin.name} |<b>SĐT:</b>{userLogin.phoneNumber}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Địa chỉ:</b>{userLogin.address}</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div className={"shadow-md"}
                                     style={{backgroundColor: "white", marginTop: "2%"}}>
                                    <table className={"table bg-white table-hover"}>
                                        <thead>
                                        <tr>
                                            <th>Tạm tính :</th>
                                            <td>{new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(sum)}</td>
                                        </tr>
                                        <tr>
                                            <th>Giảm giá:</th>
                                            <td>0%</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><b>Tổng Cộng:</b></td>
                                            <td>{new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(sum)}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <button type="button" className="btn btn-danger fw-bolder"
                                        style={{marginTop: "2%", width: "40%", marginLeft: "8.5rem"}}
                                        onClick={() => handleModal()}>Mua hàng
                                </button>

                            </div>) : ("")}

                        </div>
                    </div>
                </div>
                <div className="popular-brands big-padding bg-white container-fluid">
                    <div className="container">
                        <div className="section-tile row">
                            <div style={{display: "flex", justifyContent: "center"}}
                                 className="col-md-10 text-center mx-auto">
                                <h2>Hãng xe nổi tiếng</h2>
                            </div>
                        </div>
                        <div className="row pt-5" style={{alignItems: "center"}}>
                            <div className="col-lg-3 col-md-4 col-6 mb-4">
                                <div className="brand-cover">
                                    <img src="../../../../brand/img.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6 mb-4">
                                <div className="brand-cover">
                                    <img src="../../../../brand/img_1.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6 mb-4">
                                <div className="brand-cover">
                                    <img src="../../../../brand/img_8.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-6 mb-4">
                                <div className="brand-cover">
                                    <img src="../../../../brand/img_6.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>) :   (<h1 className={"p-5 text-center" }>VUI LÒNG ĐĂNG NHẬP ĐỂ XEM GIỎ HÀNG</h1>)}


            <Footer/>

            {
                show && (
                    <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel"><b
                                        style={{display: "flex", justifyContent: "center"}}>Chọn phương thức thanh
                                        toán</b></h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"
                                            onClick={closeModal}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div style={{backgroundColor: "white", marginTop: "2%"}}>
                                        <h3 style={{textAlign: "center"}}>Hình thức thanh toán</h3>
                                        <button type="button" className="btn btn-success w-100 mb-3 ml-3">Thanh toán
                                            khi nhận hàng
                                        </button>
                                        <Paypal amount={sum / 20000}
                                                payload={{cartDetailList}}
                                                close={closeModal}
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">

                                </div>
                            </div>
                        </div>
                    </div>
                )}

        </div>
    )
}