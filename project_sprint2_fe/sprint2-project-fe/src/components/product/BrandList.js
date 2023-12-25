import * as brandService from "../../service/brandService"
import * as categoryDetailService from "../../service/categoryDetailService"
import {useEffect, useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {getAllProductByBrand} from "../../service/brandService";
import {Header} from "../homepages/Header";
import {Footer} from "../homepages/Footer";
import * as userService from "../../service/userService"
import * as cartService from "../../service/cartService";
import {toast} from "react-toastify";
import {getAll} from "../redux/middleaware/CartMiddleaware";
import {useDispatch} from "react-redux";
import * as loginService from "../../service/loginService";
import * as productService from "../../service/productService";
export function BrandList() {
    const {id} = useParams();
    const [productList, setProductList] = useState([]);
    const [categoryDetailName, setCategoryDetailName] = useState("");
    const [productName, setProductName] = useState("")
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [refresh, setRefresh] = useState(true);
    const [categoryDetails, setCategoryDetail] = useState([])
    const [user, setUser] = useState();
    const dispatch = useDispatch();
    const idLogin = loginService.getAccessTokenId();
    const navigate = useNavigate();
    useEffect(() => {
        getProductByBrandId();
        getAllCategoryDetail();
        getUserByAccountId();
    }, [id,refresh,productName,categoryDetailName]);

    const getAllCategoryDetail = async () => {
        const result = await categoryDetailService.getAllCategoryDetail();
        console.log(result)
        setCategoryDetail(result.data);
    }

    const getProductByBrandId = async () => {
        const result = await brandService.getAllProductByBrand(id, currentPage, categoryDetailName, productName);
        console.log(result);
        setProductList(result.data.content);
        setTotalPages(result.data.totalPages)
    }
    const prePage = () => {
        setCurrentPage((currentPage) => currentPage - 1);
        setRefresh((refresh) => !refresh);
    }

    const nextPage = () => {
        setCurrentPage((currentPage) => currentPage + 1);
        setRefresh((refresh) => !refresh);
    }

    const getUserByAccountId = async () => {
        const result = await userService.getUserByAccountId(idLogin);
        if (result) {
            setUser(result.data);
        }

    }

    const addToCart = async (productId) => {
        if (idLogin) {
            const result = await cartService.getCardByProductIdAndUserId(productId, user.id);
            if (result.status === 204) {
                let value = {quantity: 1, productId: productId, userId: user.id}
                const res = await cartService.addToCart(value);
                console.log(res)
                if (res.status === 201) {
                    toast.success("Đã thêm vào giỏ hàng");
                    dispatch(getAll(user.id));
                } else {
                    toast.error("Thất bại")
                }
            } else {
                const data = await productService.getProductDetail(productId);
                console.log(productId)
                if (result.data.quantity < data.data.quantity ){
                    let value = {
                        id: result.data.id,
                        quantity: result.data.quantity + 1,
                        productId: productId,
                        userId: user.id
                    }
                    console.log(value)
                    const request = await cartService.addToCart(value);
                    console.log(request)
                    if (request.status === 201) {
                        toast.success("Đã thêm vào giỏ hàng");
                        dispatch(getAll(user.id));
                    } else {
                        toast.error("Thất bại")
                    }
                } else {
                toast.error("Sản phẩm đã có trong giỏ hàng, vượt quá hàng tồn kho.")
            }

            }

        } else {
            navigate("/login")
        }
    }

    return (
        <>
            <Header/>
            <div className="latest-products pt-3 pb-0">
                <div className="container-xl">
                    <div className="section-tile row">
                        <div style={{display:"flex",justifyContent:"center"}} className="col-md-10 text-center mx-auto">
                            <h2 className={"shadow-md"}>Thương hiệu</h2>
                        </div>
                    </div>
                    <input type={"text"} className={"input"} placeholder="Nhập tên sản phẩm cần tìm"
                           onChange={(event) => setProductName(event.target.value)}/>
                    <select className={"select"} onChange={(event) => setCategoryDetailName(event.target.value)}>
                        <option value="">---Loại sản phẩm---</option>
                        {categoryDetails.map((item) =>
                            <option key={item.id} value={item.name}>{item.name}</option>
                        )}
                    </select>
                    <div className="row mt-5">
                        {productList ? (<>
                            {productList.map((item,index) =>
                                <div key={index} className="col-lg-4 col-md-4 mb-4">
                                    <div className="bg-white p-2 shadow-md card" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                                        <div className="text-center">
                                            <img src={item.images} alt=""/>
                                        </div>
                                        <div className="detail p-2">
                                            <h4 className="mb-1 fs-5 fw-bold"
                                                style={{textAlign: "center"}}>{item.productName}</h4>
                                            <div className="mb-1 fs-5 ">Thương Hiệu : {item.brandName}</div>
                                            {item.productQuantity > 0 ? (<div style={{color: "red"}}>Còn hàng</div>) : (
                                                <div style={{color: "red"}}>Hết hàng</div>)}
                                            <b className="fs-4 text-danger">{ new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(item.priceSale)}</b>
                                            <s className="fs-5 ps-3">{ new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(item.productPrice)}</s>

                                            <div className="row pt-2">
                                                <div className="col-md-6">
                                                        <button className="btn mb-2 fw-bold w-100 btn-danger" onClick={()=>addToCart(item.productId)}>
                                                            Thêm vào giỏ  <i className="fa-solid fa-cart-shopping"></i>
                                                        </button>
                                                </div>
                                                <div className="col-md-6">
                                                    <NavLink to={`/product/detail/${item.productId}`}>
                                                        <button className="btn fw-bold w-100 btn-outline-danger">
                                                            Chi tiết <i className="fa-solid fa-circle-info"></i>
                                                        </button>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <nav aria-label="Page navigation example" style={{display:"flex",justifyContent:"center"}} className={"pb-3"}>
                                <ul className="pagination">
                                    <li className="page-item">
                                        <button className="page-link" aria-label="Previous" onClick={() => prePage()} tabIndex={-1} disabled={currentPage + 1 <= 1}>
                                            <span aria-hidden="true">&laquo;</span>
                                        </button>
                                    </li>
                                    <li className="page-item"><button className="page-link" >{currentPage + 1}/{totalPages}</button></li>
                                    <li className="page-item">
                                        <button className="page-link" aria-label="Next" disabled={currentPage + 1 >= totalPages} onClick={() => nextPage()}>
                                            <span aria-hidden="true">&raquo;</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </>) : (<h1 style={{textAlign:"center"}}>Không có dữ liệu tìm kiếm</h1>)
                        }

                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}