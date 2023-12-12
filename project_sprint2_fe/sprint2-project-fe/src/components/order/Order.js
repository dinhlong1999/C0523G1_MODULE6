import {Header} from "../homepages/Header";
import {Footer} from "../homepages/Footer";
import {NavLink, useParams} from "react-router-dom";
import * as cartService from "../../service/cartService"
import {useEffect, useState} from "react";
import * as userService from "../../service/userService";

export function Order() {
    const {id} = useParams();
    const [cartDetailList, setCartDetailList] = useState([]);
    const [userLogin, setUserLogin] = useState({});

    useEffect(() => {
        getUserByAccountId();
    }, []);

    const getUserByAccountId = async () => {
        const result = await userService.getUserByAccountId(id);
        setUserLogin(result.data);
        getCartDetail(result.data.id);
    }


    const getCartDetail = async (userId) => {
        const result = await cartService.getCartByUserId(userId);
        console.log(result);
        setCartDetailList(result.data);
    }

    return (
        <div>
            <Header/>
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

                                {cartDetailList.length > 0 ? (
                                        <tbody>
                                        {cartDetailList.map((item, index) =>
                                            <tr key={index} className="align-middle" style={{alignItems: "center"}}>
                                                <td>
                                                    <div className="form-check"
                                                         style={{display: "flex", justifyContent: "center"}}>
                                                        <input className="form-check-input" type="checkbox" value=""
                                                        />
                                                    </div>
                                                </td>
                                                <td>1</td>
                                                <td>
                                                    <img className="max-100" src={item.images} alt=""/>
                                                </td>
                                                <td>{item.productName}</td>
                                                <td>
                                                    <button type={"button"} className={"btn btn-danger btn-sm m-r-3"}>
                                                        <i className="fa-solid fa-minus"
                                                           style={{display: "flex", justifyContent: "center"}}></i>
                                                    </button>
                                                    {item.quantity}
                                                    <button type={"button"} className={"btn btn-success btn-sm m-l-3"}>
                                                        <i className="fa-solid fa-plus"
                                                           style={{display: "flex", justifyContent: "center"}}></i>
                                                    </button>
                                                </td>
                                                <td>{item.priceSale}</td>
                                                <td>{item.priceSale * item.quantity}</td>
                                                <td>
                                                    <button className="btn btn-xs pt-2 btn-danger"><i
                                                        className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )}
                                        </tbody>
                                    ) :
                                    (<div>Không có dữ liệu</div>)}
                            </table>

                        </div>
                        <div className="col-md-4 mx-auto">
                            <div className="align-middle" style={{backgroundColor: "white"}}>
                                <table className={"table bg-white shadow-md table-hover"}>
                                    <thead>
                                    <tr>
                                        <th>Giao đến:</th>
                                        <th>
                                            <NavLink to={""} style={{color: "blue",fontSize:"18px"}}>
                                                Thay đổi
                                            </NavLink>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><b>Tên:</b>{userLogin.name} |<b>SĐT:</b>{userLogin.phoneNumber}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Địa chỉ:</b>{userLogin.address}</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className={"shadow-md"} style={{backgroundColor: "white", marginTop: "2%"}}>
                                <table className={"table bg-white table-hover"}>
                                    <thead>
                                    <tr>
                                        <th>Tạm tính :</th>
                                        <td>12312312</td>
                                    </tr>
                                    <tr>
                                        <th>Giảm giá:</th>
                                        <td>0%</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><b>Tổng Cộng:</b></td>
                                        <td>300000</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className={"shadow-md"} style={{backgroundColor: "white", marginTop: "2%"}}>
                                <b style={{display: "flex", justifyContent: "center"}}>Chọn phương thức thanh toán</b>
                                <table>
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th>Hình thức thanh toán</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className={"p-l-3"}><i className="fa-solid fa-circle"
                                                                   style={{fontSize: "10px"}}></i></td>
                                        <td className={"p-l-5"}>Thanh toán sau khi nhận hàng</td>
                                        <th className={"p-l-5"}>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio"
                                                       name="flexRadioDefault" checked/>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td className={"p-l-3"}><i className="fa-solid fa-circle"
                                                                   style={{fontSize: "10px"}}></i></td>
                                        <td className={"p-l-5"}>Thanh toán bằng Paypal</td>
                                        <th className={"p-l-5"}>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio"
                                                       name="flexRadioDefault"/>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>

                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <button className="btn btn-danger  fw-bolder"
                                    style={{marginTop: "2%", width: "40%", marginLeft: "8.5rem"}}>Mua hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popular-brands big-padding bg-white container-fluid">
                <div className="container">
                    <div className="section-tile row">
                        <div className="col-md-10 text-center mx-auto">
                            <h2>Hãng nổi tiếng</h2>
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
                                <img src="../../../../brand/img_4.png" alt=""/>
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
            <Footer/>
        </div>
    )

}