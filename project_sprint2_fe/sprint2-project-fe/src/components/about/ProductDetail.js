import {useEffect, useState} from "react";
import {Header} from "../homepages/Header";
import {Footer} from "../homepages/Footer";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import * as productService from "../../service/productService"
import {getDetailProductImages} from "../../service/productService";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {toast} from "react-toastify";
import * as loginService from "../../service/loginService"
import * as userService from "../../service/userService"
import * as cartService from "../../service/cartService";
import {getAll} from "../redux/middleaware/CartMiddleaware";
import {useDispatch, useSelector} from "react-redux";
import "../../css/ImageGallery.css"
import Modal from 'react-modal';
export function ProductDetail() {
    const {id} = useParams();
    const [product, setProduct] = useState();
    const [productDetail, setProductDetail] = useState();
    const [quantityProduct, setQuantityProduct] = useState(1);
    const idLogin = loginService.getAccessTokenId();
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        getDetailProductImages();
        getProductDetail();
        getUserByAccountId();
    }, []);

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
    const getUserByAccountId = async () => {
        const result = await userService.getUserByAccountId(idLogin);
        if (result) {
            setUser(result.data);
            dispatch(getAll(result.data.id))
        }
    }
    const addToCart = async (productId) => {
        if (quantityProduct <= 0){
            toast.error("Số lượng không hợp lệ vui lòng nhập lại")
        }else {
            if (idLogin) {
                const result = await cartService.getCardByProductIdAndUserId(productId, user.id);
                if (result.status === 204) {
                    let value = {quantity: quantityProduct, productId: productId, userId: user.id}
                    const res = await cartService.addToCart(value);
                    console.log(res)
                    if (res.status === 201) {
                        toast.success("Đã thêm vào giỏ hàng");
                        dispatch(getAll(user.id));
                    } else {
                        toast.error("Thất bại")
                    }
                } else {
                    let value = {
                        id: result.data.id,
                        quantity: result.data.quantity + quantityProduct,
                        productId: productId,
                        userId: user.id
                    }
                    console.log(value)
                    if (productDetail.quantity >= value.quantity){
                        const request = await cartService.addToCart(value);
                        if (request.status === 201) {
                            toast.success("Đã thêm vào giỏ hàng");
                            dispatch(getAll(user.id));
                        } else {
                            toast.error("Thất bại")
                        }
                    }else {
                        toast.error("Sản phẩm đã có trong giỏ hàng, vượt quá hàng tồn kho.")
                        console.log(value.quantity)
                    }
                }

            } else {
                navigate("/login")
            }
        }

    }

    const handleInputChange = (event) => {
        let value = +event.target.value;
        if (value > productDetail.quantity) {
            toast.warn("Số lượng bạn đặt vượt quá hàng tồn kho (Tồn kho: " + productDetail.quantity + ", Số lượng bạn đặt :" + event.target.value + ").");
        } else if (value < 0){
            toast.warn("Số lượng bạn đặt không hợp lệ. Vui lòng nhập lại")
        }else if (!/^\d+$/.test(value)){
            toast.warn("Số lượng bạn đặt không hợp lệ. Vui lòng nhập lại")
        }else {
            setQuantityProduct(value);
        }
    }




    if (!product || !productDetail) {
        return null;
    }


    return (
        <div>
            <Header/>
            <div className="container-fluid big-padding bg-white about-cover">
                <div className="container">
                        {/*<NavLink to={"/product/1"}>*/}
                        {/*    <button type="button" className="btn btn-danger mb-3">Quay lại danh mục</button>*/}
                        {/*</NavLink>*/}
                    <div className="row about-row">
                        <div className="col-md-5 text-center">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {product.map((item, index) =>
                                    <SwiperSlide>
                                        <div key={index}>
                                            <img className="image" style={{height: "400px"}} src={item.filePath} alt="images" onClick={openModal}/>
                                            <Modal
                                                isOpen={isModalOpen}
                                                onRequestClose={closeModal}
                                                contentLabel="Image Modal"
                                                className="modal"
                                                overlayClassName="overlay"
                                            >
                                                <img
                                                    className="modal-image"
                                                    src={item.filePath}
                                                    alt="Your Image"
                                                />
                                                <button className={"btu"} onClick={closeModal}>Đóng</button>
                                            </Modal>
                                        </div>

                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                        <div className="col-md-7">
                            <h3 style={{textAlign: "center"}}>{productDetail.name}</h3>
                            <p>
                                Hãng sản xuất : {productDetail.brand.name}
                            </p>
                            <p>
                                Xuất xứ: {productDetail.brand.manufacturer}
                            </p>
                            <b className="fs-4 text-danger">{new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            }).format(productDetail.priceSale)}</b>
                            <s className="fs-5 ps-3">{new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            }).format(productDetail.price)}</s>
                            <div className="row pt-2">
                                <div className="col-md-2">
                                    <b>Số lượng : </b>
                                </div>
                                <div className="col-md-3">
                                    <input className={"inputQuantity"}
                                           type="number"
                                           min={1}
                                           max={productDetail.quantity}
                                           value={quantityProduct}
                                           onChange={handleInputChange}
                                    />

                                </div>
                                <div className="col-md-3 " style={{marginLeft: "8%"}}>
                                    <b>Tồn kho</b> : {productDetail.quantity}
                                </div>
                            </div>
                            {productDetail.quantity > 0 ? (<div className="row pt-2">
                                <div className="col-md-12" style={{display: "flex", justifyContent: "center"}}>
                                    <button className="btn fw-bold  btn-danger" onClick={()=>addToCart(productDetail.id)}>
                                        Thêm vào giỏ  <i className="fa-solid fa-cart-shopping"></i>
                                    </button>
                                </div>
                            </div>) : (<div className="col-md-12" style={{display: "flex", justifyContent: "center"}}>
                                <button className="btn fw-bold  btn-danger">
                                    Tạm hết hàng
                                </button>
                            </div>)}

                            {productDetail.rim ? (<div>
                                <h3 style={{textAlign: "center"}}>Thông số kĩ thuật</h3>
                                <ul className="key-features mt-2">
                                    <li>
                                        <i className="bi bi-caret-right"/><b>Phuộc xe</b> : {productDetail.bicycleFork}
                                    </li>
                                    <li>
                                        <i className="bi bi-caret-right"/><b>Khung xe</b> : {productDetail.bicycleFrame}
                                    </li>
                                    <li>
                                        <i className="bi bi-caret-right"/><b>Vành xe</b> : {productDetail.rim}
                                    </li>
                                    <li>
                                        <i className="bi bi-caret-right"/><b>Lốp xe</b> : {productDetail.tire}
                                    </li>
                                    <li>
                                        <i className="bi bi-caret-right"/><b>Yên xe</b> : {productDetail.saddle}
                                    </li>
                                    <li>
                                        <i className="bi bi-caret-right"/><b>Ghi đông</b> : {productDetail.handleBar}
                                    </li>
                                </ul>
                            </div>) : ("")}

                        </div>
                    </div>
                    <hr style={{borderTop: "2px solid", opacity: 1}}/>
                    <div className="row product-detail">
                        <h3 className={"pb-2"} style={{textAlign: "center"}}>Chi tiết sản phẩm</h3>
                        <p className="mb-3">
                            {productDetail.description}
                        </p>
                        <p className="mb-3" style={{display: "flex", justifyContent: "center"}}>
                            <img style={{height: "500px"}} src={product[0].filePath}/>
                        </p>
                        <p className="mb-3" style={{display: "flex", justifyContent: "center"}}>
                            <img style={{height: "500px"}} src={product[1].filePath}/>
                        </p>

                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )


}