import "../homepages/assets/css/style.css"
import "../../css/main.css"
import {NavLink} from "react-router-dom";

export function HomePages() {


    return (
        <>
            <header className="container-fluid bg-white">
                <div className="header-top bg-gray  border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="d-inline-flex pt-0 pt-md-2 fs-6">
                                    <li className="p-2 ">
                                        <i className="bi bi-envelope"/> long1110dn@gmail.com
                                    </li>
                                    <li className="p-2 d-none d-md-block">
                                        <i className="bi bi-headphones"/> 0932533481
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 d-flex align-items-end">
                                <ul className="ms-auto d-inline-flex">
                                    <li className="p-2">
                                        <NavLink to={"/login"}>
                                            <button type={"button"} className="btn px-4 btn-outline-success ">Login</button>
                                        </NavLink>
                                    </li>
                                    <li className="p-2">
                                        <a target="_blank" href="">
                                            <button className="btn px-4 btn-outline-danger">
                                                Sign Up
                                            </button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo-contaienr p-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-9 pt-1 pb-2">
                                <NavLink to={"/"}>
                                    <img
                                        className="logo"
                                        src="https://www.ngoisaoso.vn/uploads/news/2015/05/13/4-rent-bicycle-logo-design.jpg"
                                        alt=""
                                    />
                                </NavLink>
                            </div>
                            <div className="col-md-6 d-none d-md-block pt-2">
                                <div className="input-group pt-1 mb-0">
                                    <input
                                        type="text"
                                        className="form-control border-end-0 mb-0"
                                        placeholder="Search Apps"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <span
                                        className="input-group-text sit border-start-0"
                                        id="basic-addon2"
                                    >
                <i className="bi bi-search"/>
              </span>
                                </div>
                            </div>
                            <div className="col-md-3 col-3 pt-1 text-end">
                                <a href="cart.html">
                                    <button
                                        type="button"
                                        className="btn btn-light shadow-md border position-relative"
                                    >
                                        <i className="bi fs-4 bi-basket"/>
                                        <span
                                            className="position-absolute fs-6 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                </span>
                                    </button>
                                </a>
                                <button
                                    type="button"
                                    className="btn d-none d-md-inline-block ms-3 btn-light shadow-md border position-relative"
                                >
                                    <i className="bi fs-4 bi-heart"/>
                                    <span
                                        className="position-absolute fs-6 top-0 start-100 translate-middle badge rounded-pill bg-warning">
                2
              </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-bar bg-danger container-fluid border-top">
                    <div className="container">
                        <h6 className="d-md-none text-white p-3 mb-0 fw-bold">
                            Menu
                            <a
                                className="text-white"
                                data-bs-target="#menu"
                                data-bs-toggle="collapse"
                                aria-expanded="false"
                                aria-controls="menu"
                            >
                                <i className="bi cp bi-list float-end fs-1 dmji"/>
                            </a>
                        </h6>
                        <ul id="menu" className=" navcol fw-bold d-none d-md-inline-flex">
                            <li className="p-21 px-4">
                                <a className="text-white" href="">
                                    Page <i className="bi pt-2 bi-chevron-down"/>
                                </a>
                                <div className="inner-div">
                                    <ul className="">
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About US</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact US</a>
                                        </li>
                                        <li>
                                            <a href="product.html">Product Listing</a>
                                        </li>
                                        <li>
                                            <a href="detail.html">Product Detail</a>
                                        </li>
                                        <li>
                                            <a href="login.html">login</a>
                                        </li>
                                        <li>
                                            <a href="signup.html">Sing Up</a>
                                        </li>
                                        <li>
                                            <a href="cart.html">Cart</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="p-21 px-4">
                                <a className="text-white" href="">
                                    Category <i className="bi pt-2 bi-chevron-down"/>
                                </a>
                                <div className="inner-div">
                                    <ul className="">
                                        <li>
                                            <a href="">Bicycle</a>
                                        </li>
                                        <li>
                                            <a href="">Accessories</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="p-21 px-4">
                                <a className="text-white" href="">
                                    Anniversary <i className="bi pt-2 bi-chevron-down"/>
                                </a>
                            </li>
                            <li className="p-21 px-4">
                                <a className="text-white" href="">
                                    Birthday <i className="bi pt-2 bi-chevron-down"/>
                                </a>
                            </li>
                            <li className="p-21 px-4">
                                <a className="text-white" href="">
                                    Personal <i className="bi pt-2 bi-chevron-down"/>
                                </a>
                            </li>
                            <li className="p-21 px-4">
                                <a className="text-white" href="">
                                    Reception <i className="bi pt-2 bi-chevron-down"/>
                                </a>
                            </li>
                            <li className="p-21 px-4">
                                <a className="text-white" href="">
                                    Occasions{" "}
                                </a>
                            </li>
                            <li className="p-21 px-4">
                                <a className="text-white" href="">
                                    Surprise{" "}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
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
            <footer>
                <div className="inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 foot-about">
                                <h4>About US</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                    hendrerit libero pellentesque libero interdum, id mattis felis
                                    dictum. Praesent eget lacus tempor justo efficitur malesuada. Cras
                                    ut suscipit nisi.
                                </p>
                                <ul>
                                    <li>23 Rose Stren Melbourn</li>
                                    <li>sales@smarteyeapps.com</li>
                                    <li>+91 876 766 554</li>
                                </ul>
                            </div>
                            <div className="col-md-3 foot-post">
                                <h4>Latest Posts</h4>
                                <div className="post-row">
                                    <div className="image">
                                        <img src="assets/images/blog/1.jpg" alt=""/>
                                    </div>
                                    <div className="detail ps-2">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                            hendrerit{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="post-row">
                                    <div className="image">
                                        <img src="assets/images/blog/7.jpg" alt=""/>
                                    </div>
                                    <div className="detail p-2">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                            hendrerit{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="post-row">
                                    <div className="image">
                                        <img src="assets/images/blog/6.jpg" alt=""/>
                                    </div>
                                    <div className="detail ps-2">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                                            hendrerit{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 foot-services">
                                <h4>Top Category</h4>
                                <ul>
                                    <li>
                                        <a href="">Target Statergy</a>
                                    </li>
                                    <li>
                                        <a href="">Web Analytics</a>
                                    </li>
                                    <li>
                                        <a href="">Page Monitering</a>
                                    </li>
                                    <li>
                                        <a href="">Page Optimization</a>
                                    </li>
                                    <li>
                                        <a href="">Target Statergy</a>
                                    </li>
                                    <li>
                                        <a href="">Email Marketing</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 foot-news">
                                <h4>News Letter</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                    justo neque, vehicula eget eros.{" "}
                                </p>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control mb-0"
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <div className="input-group-append">
                <span className="input-group-text bg-danger" id="basic-addon2">
                  <i className="bi text-white bi-send"/>
                </span>
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <i className="bi bi-facebook"/>
                                    </li>
                                    <li>
                                        <i className="bi bi-twitter"/>
                                    </li>
                                    <li>
                                        <i className="bi bi-instagram"/>
                                    </li>
                                    <li>
                                        <i className="bi bi-linkedin"/>
                                    </li>
                                    <li>
                                        <i className="bi bi-pinterest"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copy">
                <div className="container">
                    <a href="https://www.smarteyeapps.com/">
                        2022 © All Rights Reserved | Designed and Developed by Smarteyeapps.com
                    </a>
                    <span>
        <a href="">
          <i className="fab fa-github"/>
        </a>
        <a href="">
          <i className="fab fa-google-plus-g"/>
        </a>
        <a href="https://in.pinterest.com/prabnr/pins/">
          <i className="fab fa-pinterest-p"/>
        </a>
        <a href="https://twitter.com/prabinraja89">
          <i className="fab fa-twitter"/>
        </a>
        <a href="https://www.facebook.com/freewebtemplatesbysmarteye">
          <i className="fab fa-facebook-f"/>
        </a>
      </span>
                </div>
            </div>
        </>

    )
}