import "../homepages/assets/css/style.css"
import "../../css/main.css"
import {Header} from "./Header";
import {Footer} from "./Footer";
import {NavLink} from "react-router-dom";
import * as homeService from "../../service/homeService"
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Navigation, Pagination} from "swiper/modules";


export function HomePages() {
    const [productNew, setProductNew] =useState([]);

    useEffect(()=>{
       getProductNew();
    },[]);

    const getProductNew = async () => {
      const result = await homeService.getProductNew();
        console.log(result)
        setProductNew(result.data);
    }


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
                        <span className="visually-hidden">Trước</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Sau</span>
                    </button>
                </div>
            </div>
            <div className="latest-products pt-5 pb-0">
                <div className="container-xl">
                    <div className="section-tile row">
                        <div className="col-md-10 text-center mx-auto">
                            <h2>Sản phẩm mới</h2>
                            <p>Xe đạp - Phụ kiện</p>
                        </div>
                    </div>
                    <div className="row mt-5">

                            <Swiper
                                spaceBetween={50}
                                slidesPerView={3}
                                pagination={{clickable: true}}
                                className={"mySwiper"}
                                loop={true}
                                navigation={true}
                                modules={[Pagination,Navigation]}

                            >
                                {productNew.map((item,index) =>
                                    <SwiperSlide>
                                        <div key={index} className={"pb-4"}>
                                            <div className="bg-white p-2 shadow-md" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                                                <div className="text-center">
                                                    <a href="detail.html">
                                                        <img src={item.images} alt=""/>
                                                    </a>
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
                                                                    Thêm vào giỏ hàng
                                                                </button>
                                                            </a>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <NavLink to={`/product/detail/${item.productId}`}>
                                                                <button className="btn fw-bold w-100 btn-outline-danger">
                                                                    Detail
                                                                </button>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>



                    </div>
                </div>
            </div>
            <div className="popular-brands big-padding bg-white container-fluid">
                <div className="container">
                    <div className="section-tile row">
                        <div className="col-md-10 text-center mx-auto">
                            <h2>Hãng xe nổi tiếng</h2>
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
           <Footer/>

        </>

    )
}