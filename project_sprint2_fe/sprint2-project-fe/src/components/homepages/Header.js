import {NavLink, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import * as loginService from "../../service/loginService";
import {LogoutConfirmModal} from "./LogoutConfirmModal";
import * as userLogin from "../../service/userService"
import {useDispatch, useSelector} from "react-redux";
import {getAll} from "../redux/middleaware/CartMiddleaware";


export function Header() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [isShowModal, setShowModal] = useState(false);
    const [userLoginId, setUserLoginId] = useState("");
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);
    const role = loginService.getRole();
    useEffect(() => {
        getUserNameByJwt();
        getIdByJwt();
    }, [userName, isShowModal])

    const getUserNameByJwt = async () => {
        const result = await loginService.getAccessTokenUserName();
        setUserName(result);
    }
    const getIdByJwt = async () => {
        const result = await loginService.getAccessTokenId();
        if (result){
            setUserLoginId(result);
            getUserByAccountId(result);
        }

    }

    const getUserByAccountId = async (userId) => {
            const result = await userLogin.getUserByAccountId(userId);
            if (result) {
                console.log(result);
                setUser(result.data);
                dispatch(getAll(result.data.id));

            }


    }

    const handleModal = async () => {
        setShowModal(true);
    }
    const closeModal = async () => {
        setShowModal(false);
    }


    return (
        <header className="container-fluid bg-white">
            <LogoutConfirmModal show={isShowModal}
                                handleCloseFn={closeModal}/>
            <div className="header-top bg-gray  border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <ul className="d-inline-flex pt-0 pt-md-2 fs-6">
                                    <li className="p-2 col-md-4">
                                        <i className="bi bi-envelope"/> long1110dn@gmail.com
                                    </li>
                                    <li className="p-2 d-none d-md-block col-md-3">
                                        <i className="bi bi-headphones"/> 0932533481
                                    </li>
                                    <li className="p-2 d-none d-md-block col-md-5">
                                        <div className="marquee-container">
                                            <div className="marquee-content">
                                               Cam kết chất lượng sản phẩm chính hãng
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logo-contaienr p-2">
                <div className="container">
                    <div className="row" style={{alignItems: "center"}}>
                        <div className="col-md-2 col-9 pt-1 pb-2">
                            <NavLink to={"/"}>
                                <img
                                    className="logo"
                                    src="../../../images/img_1.png"
                                    alt=""
                                />
                            </NavLink>
                        </div>

                        <div className="col-md-5">

                        </div>
                        {userName ?
                            (<div className="col-md-5 d-flex align-items-end">

                                {userName && (<div className=" pt-1 text-end">
                                    <NavLink to={`/order`}>
                                        <button type="button"
                                                className="btn btn-light shadow-md border position-relative"
                                                style={{marginLeft: "100%"}}>
                                            <i className="bi fs-4 bi-basket"/>
                                            <span
                                                className="position-absolute fs-6 top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                </span>
                                        </button>
                                    </NavLink>

                                </div>)}

                                <div className="btn-group" style={{paddingLeft: "30%"}}>
                                    <button type="button" className="btn btn-light dropdown-toggle shadow-md border"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                        {user.name}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <NavLink to={"/history"}>
                                            <li className="dropdown-item">Lịch sử mua hàng</li>
                                        </NavLink>


                                    </ul>
                                    <button className="Btn ">

                                        <div className="sign">
                                            <svg viewBox="0 0 512 512">
                                                <path
                                                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                                            </svg>
                                        </div>

                                        <div className="text" onClick={() => handleModal()}>Đăng xuất</div>
                                    </button>
                                </div>


                            </div>)
                            :
                            (<div className=" col-md-4 d-flex align-items-end">
                                <ul className="ms-auto d-inline-flex">
                                    <li className="p-2">
                                        <NavLink to={"/login"}>
                                            <button type={"button"} className="btn px-4 btn-outline-success ">Đăng
                                                nhập
                                            </button>
                                        </NavLink>
                                    </li>
                                    {/*<li className="p-2">*/}
                                    {/*    <a target="_blank" href="">*/}
                                    {/*        <button className="btn px-4 btn-outline-danger">*/}
                                    {/*            Đăng kí*/}
                                    {/*        </button>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>)
                        }

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
                    <ul id="menu" className=" navcol fw-bold d-none d-md-inline-flex" style={{alignItems: "center"}}>
                        <li className="p-21 px-4">
                            <NavLink to={"/"} style={{color: "white"}}>
                                Trang chủ
                            </NavLink>

                        </li>
                        <li className="p-21 px-5">
                            <NavLink to={"/product/1"} style={{color: "white"}}>
                                Xe đạp
                            </NavLink>
                        </li>
                        <li className="p-21 px-5" style={{color: "white"}}>
                            Thương hiệu <i className="bi pt-2 bi-chevron-down"/>
                            <div className="inner-div">
                                <ul className="">
                                    <li>
                                        <NavLink to={"/product/brand/1"}>
                                            Giant
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/product/brand/2"}>
                                            Liv
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/product/brand/3"}>
                                            Galaxy
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/product/brand/4"}>
                                            Trek
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/product/brand/5"}>
                                            Twitter
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="p-21 px-5">
                            <NavLink to={"/product/2"} style={{color: "white"}}>
                                Phụ kiện
                            </NavLink>
                        </li>
                        <li className="p-21 px-5">
                            <NavLink to={"/product/3"} style={{color: "white"}}>
                                Trang phục
                            </NavLink>
                        </li>
                        {role && role.some(r => r.authority === "ADMIN") && (
                            <NavLink to={"/admin"}>
                                <li className="p-21 px-3" style={{color: "white"}}>
                                    Quản lý
                                </li>
                            </NavLink>)}

                    </ul>
                </div>
            </div>
        </header>
    )
}