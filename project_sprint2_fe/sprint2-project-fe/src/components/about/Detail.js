import {Header} from "../homepages/Header";
import {Footer} from "../homepages/Footer";
import "../../components/homepages/assets/css/style.css"
import {NavLink} from "react-router-dom";

export function Detail() {


    return(
        <div>
            <Header/>
            <div className="container-fluid big-padding about-cover">
                <div className="container">
                    <div className="row about-row">
                        <div className="col-md-6 no-padding image">
                            <img src="../../../product/img.png" alt=""/>
                        </div>
                        <div className="col-md-6 detail ps-4 ">
                            <h2>GIANT 2024 XTC ADV 24</h2>
                            <h5 id={"px-5"}><b>Manufacturer:</b> <span>Giant</span> </h5>
                            <h5 id={"px-5"}><b>Description:</b> <span>GIANT XTC ADV 3 2024 29 sở hữu thiết kế khung xe mạnh mẽ, cứng cáp đặc trưng với chất liệu Carbon, trọng lượng siêu nhẹ, hỗ trợ người lái cân bằng hệ thống lái dễ dàng khi đi trên địa hình hiểm trở. Nó có thể chống chịu va đập và các tác động xấu từ môi trường bên ngoài với lớp sơn tĩnh điện cao cấp.</span> </h5>
                           <h5 id={"px-5"}><b> Price :</b> <span>7.500.000</span> </h5>
                            <div className="row pt-2">
                                <div className="col-md-6">
                                    <a href="detail.html">
                                        <button className="btn mb-2 fw-bold w-100 btn-danger">
                                            Buy Now
                                        </button>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <NavLink to={"/detail"}>
                                        <button className="btn fw-bold w-100 btn-outline-danger">
                                            Add to cart
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="latest-products pt-5 pb-0">
                <div className="container-xl">
                    <div className="section-tile row">
                        <div className="col-md-10 text-center mx-auto">
                            <h1>Similar product</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-4 mb-4">
                            <div className="bg-white p-2 shadow-md">
                                <div className="text-center">
                                    <a href="detail.html">
                                        <img src="../../../../product/img.png" alt=""/>
                                    </a>
                                </div>
                                <div className="detail p-2">
                                    <h4 className="mb-1 fs-5 fw-bold">GIANT 2024 XTC ADV 24</h4>
                                    <b className="fs-4 text-danger">$44.00</b>
                                    <s className="fs-5 ps-3">60.00</s>
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
                                                    Rent Now
                                                </button>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                            <NavLink to={"/detail"}>
                                                <button className="btn fw-bold w-100 btn-outline-danger">
                                                    Detail
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-4">
                            <div className="bg-white p-2 shadow-md">
                                <div className="text-center">
                                    <a href="detail.html">
                                        <img
                                            src="../../../../product/img_1.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="detail p-2">
                                    <h4 className="mb-1 fs-5 fw-bold">GIANT 2024 XTC 820 29</h4>
                                    <b className="fs-4 text-danger">$44.00</b>
                                    <s className="fs-5 ps-3">60.00</s>
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
                                                    Rent Now
                                                </button>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn fw-bold w-100 btn-outline-danger">
                                                Detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-4">
                            <div className="bg-white p-2 shadow-md">
                                <div className="text-center">
                                    <a href="detail.html">
                                        <img
                                            src="../../../../product/img_2.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="detail p-2">
                                    <h4 className="mb-1 fs-5 fw-bold">GIANT 2024 XTC 820 27.5</h4>
                                    <b className="fs-4 text-danger">$44.00</b>
                                    <s className="fs-5 ps-3">60.00</s>
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
                                                    Rent now
                                                </button>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn fw-bold w-100 btn-outline-danger">
                                                Detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-4">
                            <div className="bg-white p-2 shadow-md">
                                <div className="text-center">
                                    <a href="detail.html">
                                        <img
                                            src="../../../../product/img_3.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="detail p-2">
                                    <h4 className="mb-1 fs-5 fw-bold">LIV 2023 ENVILIV ADV 1</h4>
                                    <b className="fs-4 text-danger">$44.00</b>
                                    <s className="fs-5 ps-3">60.00</s>
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
                                                    Rent Now
                                                </button>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn fw-bold w-100 btn-outline-danger">
                                                Detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="popular-brands big-padding bg-white container-fluid">
                <div className="container">
                    <div className="section-tile row">
                        <div className="col-md-10 text-center mx-auto">
                            <h2>Popular Brands</h2>
                        </div>
                    </div>
                    <div className="row pt-5" style={{alignItems:"center"}}>
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