import "../homepages/assets/css/style.css"
import "../../css/main.css"
import {Header} from "./Header";
import {Footer} from "./Footer";
import {NavLink} from "react-router-dom";

export function HomePages() {


    return (
        <>
            <Header/>
            <div className="slider">
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="../../../../images/img_slide.png"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="../../../../images/img_slide_1.png"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="../../../../images/img_slide_2.png"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="latest-products pt-5 pb-0">
                <div className="container-xl">
                    <div className="section-tile row">
                        <div className="col-md-10 text-center mx-auto">
                            <h1>New Products</h1>
                            <p>Bicycle-Accessories</p>
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
                        <div className="col-lg-4 col-md-4 mb-4">
                            <div className="bg-white p-2 shadow-md">
                                <div className="text-center">
                                    <a href="detail.html">
                                        <img
                                            src="../../../../product/img_4.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="detail p-2">
                                    <h4 className="mb-1 fs-5 fw-bold">ÁO ĐẠP XE DÀI TAY GIANT-NỈ</h4>
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
                                            src="../../../../product/img_5.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="detail p-2">
                                    <h4 className="mb-1 fs-5 fw-bold">KÍNH XE ĐẠP ĐỔI MÀU GIANT </h4>
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

        </>

    )
}