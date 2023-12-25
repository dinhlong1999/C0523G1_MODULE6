import "../homepages/assets/css/style.css"
import "../../css/main.css"
import {Header} from "./Header";
import {Footer} from "./Footer";
import {NavLink, useNavigate} from "react-router-dom";
import * as homeService from "../../service/homeService"
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import * as cartService from "../../service/cartService"
import * as loginService from "../../service/loginService"
import * as userService from "../../service/userService"
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {getAll} from "../redux/middleaware/CartMiddleaware";
import * as productService from "../../service/productService";
import * as orderService from "../../service/orderService"


export function HomePages() {
    const [productNew, setProductNew] =useState();
    const idLogin = loginService.getAccessTokenId();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const [productBestSellers, setProductBestSellers] = useState();



    useEffect(()=>{
       getProductNew();
       getUserByAccountId();
       getProductBestSellers();
    },[]);

    const getProductNew = async () => {
      const result = await homeService.getProductNew();
        console.log(result)
        setProductNew(result.data);
    }

    const getUserByAccountId = async () =>{
        const result = await userService.getUserByAccountId(idLogin);
        if (result){
            setUser(result.data);
        }
    }

    const getProductBestSellers = async () => {
       const result = await productService.getProductBestSellers();
        console.log(result)
        setProductBestSellers(result.data)
    }



    const addToCart = async (productId) =>{
        if (idLogin){
            const result = await cartService.getCardByProductIdAndUserId(productId,user.id);
            if (result.status === 204){
                let value = {quantity:1,productId:productId,userId:user.id}
                const res = await cartService.addToCart(value);
                console.log(res)
                if (res.status === 201){
                    toast.success("Đã thêm vào giỏ hàng");
                    dispatch(getAll(user.id));
                }else {
                    toast.error("Thất bại")
                }
            }else {
                const data = await productService.getProductDetail(productId);
                if (result.data.quantity < data.data.quantity){
                    let value = {id: result.data.id,quantity:result.data.quantity + 1, productId:productId,userId: user.id}
                    console.log(value)
                    const request = await cartService.addToCart(value);
                    if (request.status === 201){
                        toast.success("Đã thêm vào giỏ hàng");
                        dispatch(getAll(user.id));
                    }else {
                        toast.error("Thất bại")
                    }
                }else {
                    toast.error("Sản phẩm đã có trong giỏ hàng, vượt quá hàng tồn kho.")
                }

            }

        }else {
            navigate("/login")
        }
    }




    if (!productNew || !productBestSellers){
        return null
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
                        <div style={{display:"flex",justifyContent:"center"}} className="col-10 text-center mx-auto">
                            <h2 className={"col-md-6 col-12 shadow-md"}>Sản phẩm mới</h2>
                        </div>
                        <p style={{textAlign:"center"}}>Xe đạp - Phụ kiện</p>
                    </div>
                    <div className="row mt-5">

                            <Swiper
                                spaceBetween={50}
                                slidesPerView={3}
                                breakpoints={{
                                        300:{
                                          slidesPerView: 1
                                        },

                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                pagination={{clickable: true}}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                className={"mySwiper"}
                                loop={true}
                                navigation={true}
                                modules={[Pagination,Navigation,Autoplay]}

                            >
                                {productNew.map((item,index) =>
                                    <SwiperSlide className={"col-12"}>
                                        <div key={index} className={"pb-4"}>
                                            <div className="bg-white p-2 shadow-md" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                                                <div className="text-center">
                                                        <img src={item.images} alt=""/>
                                                </div>
                                                <div className="detail p-2">
                                                    <h4 className="mb-1 fs-5 fw-bold">{item.productName}</h4>
                                                    <div className="mb-1 fs-5 ">Thương Hiệu : {item.brandName}</div>
                                                    {item.productQuantity > 0 ? (<div style={{color:"red"}}>Còn hàng</div>) : (<div style={{color:"red"}}>Hết hàng</div>)}
                                                    <b className="fs-4 text-danger">{ new Intl.NumberFormat('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    }).format(item.priceSale)}</b>
                                                    <s className="fs-5 ps-3">{ new Intl.NumberFormat('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    }).format(item.productPrice)}</s>
                                                    <div className="row pt-2">
                                                        {item.productQuantity > 0 ? (<div className="col-md-6">
                                                            <button className="btn mb-2 fw-bold w-100 btn-danger" onClick={()=>addToCart(item.productId)} >
                                                                Thêm vào giỏ  <i className="fa-solid fa-cart-shopping"></i>
                                                            </button>
                                                        </div>) :(<div className="col-md-6">
                                                            <button className="btn mb-2 fw-bold w-100 btn-danger">
                                                                 Tạm hết hàng
                                                            </button>
                                                        </div>) }

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
                                    </SwiperSlide>
                                )}
                            </Swiper>



                    </div>
                </div>
            </div>

            <div className="latest-products pt-5 pb-0">
                <div className="container-xl">
                    <div className="section-tile row">
                        <div style={{display:"flex",justifyContent:"center"}} className="col-md-10 text-center mx-auto">
                            <h2 className={"col-md-6 col-12 shadow-md"}>Sản phẩm bán chaỵ</h2>
                        </div>
                    </div>
                    <div className="row mt-5">

                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            pagination={{clickable: true}}
                            breakpoints={{
                                300:{
                                    slidesPerView: 1
                                },

                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            className={"mySwiper"}
                            loop={true}
                            navigation={true}
                            modules={[Pagination,Navigation,Autoplay]}

                        >
                            {productBestSellers.map((item,index) =>
                                <SwiperSlide>
                                    <div key={index} className={"pb-4"}>
                                        <div className="bg-white p-2 shadow-md" style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
                                            <div className="text-center">
                                                <img src={item.images} alt=""/>
                                            </div>
                                            <div className="detail p-2">
                                                <h4 className="mb-1 fs-5 fw-bold">{item.productName}</h4>
                                                <div className="mb-1 fs-5 ">Thương Hiệu : {item.brandName}</div>
                                                {item.productQuantity > 0 ? (<div style={{color:"red"}}>Còn hàng</div>) : (<div style={{color:"red"}}>Hết hàng</div>)}
                                                <b className="fs-4 text-danger">{ new Intl.NumberFormat('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(item.productPriceSale)}</b>
                                                <s className="fs-5 ps-3">{ new Intl.NumberFormat('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(item.productPrice)}</s>
                                                <div className="row pt-2">
                                                    {item.productQuantity > 0 ? (<div className="col-md-6">
                                                        <button className="btn mb-2 fw-bold w-100 btn-danger" onClick={()=>addToCart(item.productId)} >
                                                            Thêm vào giỏ  <i className="fa-solid fa-cart-shopping"></i>
                                                        </button>
                                                    </div>) : (<div className="col-md-6">
                                                        <button className="btn mb-2 fw-bold w-100 btn-danger">
                                                            Tạm hết hàng
                                                        </button>
                                                    </div>) }

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
                                </SwiperSlide>
                            )}
                        </Swiper>



                    </div>
                </div>
            </div>
            
            <div className="popular-brands big-padding bg-white container-fluid">
                <div className="container">
                    <div className="section-tile row">
                        <div style={{display:"flex",justifyContent:"center"}} className="col-md-10 text-center mx-auto">
                            <h2 >Hãng xe nổi tiếng</h2>
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