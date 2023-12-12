import {useEffect, useState} from "react";
import {Header} from "../homepages/Header";
import {Footer} from "../homepages/Footer";
import {NavLink, useParams} from "react-router-dom";
import * as productService from "../../service/productService"
import {getDetailProductImages} from "../../service/productService";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from "swiper/modules";

export function ProductDetail() {
    const {id} = useParams();
    const [product,setProduct] = useState();
    const [productDetail, setProductDetail] = useState({});

    useEffect(()=>{
        getDetailProductImages();
        getProductDetail();
    },[]);

    const getDetailProductImages = async () => {
        const result = await productService.getDetailProductImages(id);
        console.log(result);
      await setProduct(result.data);
    }
    const getProductDetail = async () => {
      const result = await productService.getProductDetail(id);
        console.log(result.data);
       await setProductDetail(result.data)
    }



    if (!product || !productDetail){
        return null;
    }


    return(
        <div>
            <Header/>
            <div className="container-fluid big-padding bg-white about-cover">
                <div className="container">
                    <div className="row about-row">
                        <div className="col-md-5 text-center">
                         <Swiper
                             navigation={true}
                             modules={[Navigation]}
                             className="mySwiper"
                         >
                             {product.map((item,index) =>
                                 <SwiperSlide>
                                     <div key={index}>
                                         <img style={{height:"400px"}} src={item.filePath} alt="images"/>
                                     </div>

                                 </SwiperSlide>
                             )}
                         </Swiper>
                        </div>
                        <div className="col-md-7">
                            <h3 style={{textAlign:"center"}}>{productDetail.name}</h3>
                            <p>
                            Hãng sản xuất : {productDetail.brand.name}
                            </p>
                            <p>
                                Xuất xứ: {productDetail.brand.manufacturer}
                            </p>
                            <b className="fs-4 text-danger">{ new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            }).format(productDetail.priceSale)}</b>
                            <s className="fs-5 ps-3">{ new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            }).format(productDetail.price)}</s>
                            <div className="row pt-2">
                                <div className="col-md-2">
                                    <b>Số lượng : </b>
                                </div>
                                <div className="col-md-3">
                                    <input className={"inputQuantity"} type="number" min={0} max={productDetail.quantity}/>
                                </div>
                                <div className="col-md-3 " style={{marginLeft:"8%"}}>
                                    <b>Tồn kho</b> : {productDetail.quantity}
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-md-6">
                                    <a href="detail.html">
                                        <button className="btn mb-2 fw-bold w-100 btn-danger">
                                            Mua ngay
                                        </button>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <NavLink to={"/detail"}>
                                        <button className="btn fw-bold w-100 btn-outline-danger">
                                            Thêm vào giỏ hàng
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                            <h3 style={{textAlign:"center"}}>Thông số kĩ thuật</h3>
                            <ul className="key-features mt-2">
                                <li>
                                    <i className="bi bi-caret-right" /><b>Phuộc xe</b> : {productDetail.bicycleFork}
                                </li>
                                <li>
                                    <i className="bi bi-caret-right" /><b>Khung xe</b> : {productDetail.bicycleFrame}
                                </li>
                                <li>
                                    <i className="bi bi-caret-right" /><b>Vành xe</b> : {productDetail.rim}
                                </li>
                                <li>
                                    <i className="bi bi-caret-right" /><b>Lốp xe</b> : {productDetail.tire}
                                </li>
                                <li>
                                    <i className="bi bi-caret-right" /><b>Yên xe</b> : {productDetail.saddle}
                                </li>
                                <li>
                                    <i className="bi bi-caret-right" /><b>Ghi đông</b> : {productDetail.handleBar}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr style={{borderTop:"2px solid" ,opacity:1}}/>
                    <div className="row product-detail">
                        <h3 className={"pb-2"} style={{textAlign:"center"}}>Product Detail</h3>
                        <p className="mb-3">
                            {productDetail.description}
                        </p>
                        <p className="mb-3" style={{display:"flex",justifyContent:"center"}}>
                            <img style={{height:"500px"}} src={product[1].filePath}/>
                        </p>
                        <p className="mb-3" style={{display:"flex",justifyContent:"center"}}>
                            <img style={{height:"500px"}} src={product[2].filePath}/>
                        </p>
                        <p className="mb-3">
                            Quisque vitae est elit. Phasellus sed quam felis. Sed eget nisi varius,
                            finibus eros vitae, porta quam. Aliquam pulvinar placerat placerat.
                            Nulla at mattis sem. Nam eget auctor massa, et tristique lacus. Sed
                            lacus dolor, commodo ac blandit sit amet, lacinia id quam. Vivamus
                            hendrerit risus id lectus convallis, quis feugiat ligula auctor.
                            Curabitur ante nulla, vestibulum a eros vitae, ultricies molestie purus.
                            Maecenas sed elit nec sapien tristique tincidunt. Aliquam laoreet nulla
                            ac metus mattis viverra. Fusce hendrerit, augue eget hendrerit
                            pellentesque, lorem nulla condimentum massa, efficitur pellentesque
                            tortor sapien sed lectus. Nullam et lorem ut turpis finibus facilisis in
                            vel orci. Nunc vitae urna sit amet libero scelerisque efficitur. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget lectus
                            imperdiet, scelerisque nunc id, pharetra metus.
                        </p>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    )



}