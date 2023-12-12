import * as productService from "../../service/productService"
import * as categoryDetailService from "../../service/categoryDetailService"
import {useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {Footer} from "../homepages/Footer";
import {Header} from "../homepages/Header";
export function ProductList() {
    const [products, setProductList] = useState([]);
    const {id} = useParams();
    const [productName, setProductName]= useState("");
    const [categoryDetailName,setCategoryDetailName] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [refresh, setRefresh] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [categoryDetails,setCategoryDetail] = useState([]);


    useEffect(()=>{
        getProductList();
        getAllCategoryDetailById();
    },[id,refresh,productName,categoryDetailName])

    const getProductList = async () => {
        const result = await productService.getListProduct(id,currentPage,productName,categoryDetailName);
        console.log(result)
        setProductList(result.data.content);
        setTotalPages(result.data.totalPages);
    }
    const getAllCategoryDetailById = async () =>{
        const result = await categoryDetailService.getAllCategoryDetailById(id);
        console.log(result)
        setCategoryDetail(result.data);

    }

    const prePage = () => {
        setCurrentPage((currentPage) => currentPage - 1);
        setRefresh((refresh) => !refresh);
    }

    const nextPage = () => {
        setCurrentPage((currentPage) => currentPage + 1);
        setRefresh((refresh) => !refresh);
    }


    return(
        <>
            <Header/>
            <div className="latest-products pt-3 pb-0">
                <div className="container-xl">
                    <div className="section-tile row">
                        <div className="col-md-10 text-center mx-auto">
                            <h2>Products</h2>
                        </div>
                    </div>
                    <input type={"text"} className={"input"} placeholder="Nhập tên xe đạp cần tìm"
                           onChange={(event) => setProductName(event.target.value)}/>
                    <select className={"select"} onChange={(event) => setCategoryDetailName(event.target.value)}>
                        <option value="">---Loại xe đạp---</option>
                        {categoryDetails.map((item) =>
                            <option key={item.id} value={item.name}>{item.name}</option>
                        )}
                    </select>
                    <div className="row mt-5">
                        {products.length > 0 ? (<>
                                {products.map((item,index) =>
                                    <div key={index} className="col-lg-4 col-md-4 mb-4">
                                        <div className="bg-white p-2 shadow-md" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                                            <div className="text-center">
                                                <img src={item.images} alt=""/>
                                            </div>
                                            <div className="detail p-2">
                                                <h4 className="mb-1 fs-5 fw-bold">{item.productName}</h4>
                                                <b className="fs-4 text-danger">{ new Intl.NumberFormat('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(item.priceSale)}</b>
                                                <s className="fs-5 ps-3">{ new Intl.NumberFormat('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(item.productPrice)}</s>
                                                <ul className="mt-0 vgth">
                                                    <li className="fs-8">
                                                        <i className="bi text-warning bi-star-fill"/>
                                                        <i className="bi text-warning bi-star-fill"/>
                                                        <i className="bi text-warning bi-star-fill"/>
                                                        <i className="bi text-warning bi-star-fill"/>
                                                        <i className="bi bi-star-fill"/>
                                                    </li>
                                                    <li className="float-end gvi">
                                                        <i className="bi text-danger bi-heart-fill"/>
                                                    </li>
                                                </ul>
                                                <div className="row pt-2">
                                                    <div className="col-md-6">
                                                        <a href="detail.html">
                                                            <button className="btn mb-2 fw-bold w-100 btn-danger">
                                                                Mua ngay
                                                            </button>
                                                        </a>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <NavLink to={`/product/detail/${item.productId}`}>
                                                            <button className="btn fw-bold w-100 btn-outline-danger">
                                                               Chi tiết
                                                            </button>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                        </>)
                            :
                            (<h1 style={{textAlign:"center"}}>Không có dữ liệu tìm kiếm</h1>)}

                    </div>
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
                </div>
            </div>
            <Footer/>
        </>


    )
}