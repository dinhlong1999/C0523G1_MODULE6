import {NavLink, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import * as loginService from "../../service/loginService";
import {LogoutConfirmModal} from "./LogoutConfirmModal";

export function Header() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [isShowModal, setShowModal] = useState(false);
    const [userLoginId, setUserLoginId] = useState("");
    useEffect(() => {
        getUserNameByJwt();
        getIdByJwt();
    }, [userName,isShowModal])

    const getUserNameByJwt = async () => {
        const result = await loginService.getAccessTokenUserName();
        setUserName(result);
    }
    const getIdByJwt = async () =>{
        const result = await  loginService.getAccessTokenId();
        setUserLoginId(result);
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
                            <ul className="d-inline-flex pt-0 pt-md-2 fs-6">
                                <li className="p-2 ">
                                    <i className="bi bi-envelope"/> long1110dn@gmail.com
                                </li>
                                <li className="p-2 d-none d-md-block">
                                    <i className="bi bi-headphones"/> 0932533481
                                </li>
                            </ul>
                        </div>
                        {userName ?
                            (<div className="col-md-4 d-flex align-items-end" >

                                <div className="btn-group" style={{paddingLeft:"50%"}}>
                                    <button type="button" className="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        {userName}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Trang cá nhân</a></li>
                                        <li><a className="dropdown-item" href="#">Lịch sử mua hàng</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#" onClick={()=>handleModal()}>Đăng xuất</a></li>
                                    </ul>
                                </div>
                            </div>)
                            :
                            (<div className="col-md-4 d-flex align-items-end" >
                                <ul className="ms-auto d-inline-flex">
                                    <li className="p-2">
                                        <NavLink to={"/login"}>
                                            <button type={"button"} className="btn px-4 btn-outline-success ">Đăng
                                                nhập
                                            </button>
                                        </NavLink>
                                    </li>
                                    <li className="p-2">
                                        <a target="_blank" href="">
                                            <button className="btn px-4 btn-outline-danger">
                                                Đăng kí
                                            </button>
                                        </a>
                                    </li>
                                </ul>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div className="logo-contaienr p-2">
                <div className="container">
                    <div className="row" style={{alignItems: "center"}}>
                        <div className="col-md-3 col-9 pt-1 pb-2">
                            <NavLink to={"/"}>
                                <img
                                    className="logo"
                                    src="../../../images/img_1.png"
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
                        {userName && ( <div className="col-md-3 col-3 pt-1 text-end">
                            <NavLink to={`/order/${userLoginId}`}>
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
                            </NavLink>

                        </div>)}

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
                        <li className="p-21 px-5">
                            <a className="text-white" href="">
                                Page <i className="bi pt-2 bi-chevron-down"/>
                            </a>
                            <div className="inner-div">
                                <ul className="">
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <a href="about.html">Về chúng tôi</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Liên hệ</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="p-21 px-4">
                            <NavLink to={"/product/1"} style={{color: "white"}}>
                                Xe đạp <i className="bi pt-2 bi-chevron-down"/>
                            </NavLink>
                        </li>
                        <li className="p-21 px-5" style={{color: "white"}}>
                            Hãng xe <i className="bi pt-2 bi-chevron-down"/>
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
                        <li className="p-21 px-4">
                            <a className="text-white" href="">
                                Phụ tùng <i className="bi pt-2 bi-chevron-down"/>
                            </a>
                            <div className="inner-div">
                                <ul className="">
                                    <li>
                                        <NavLink to={"/product/1"}>
                                            Ghi đông
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/product/2"}>
                                            Vành bánh xe
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="p-21 px-4">
                            <a className="text-white" href="">
                                Trang phục <i className="bi pt-2 bi-chevron-down"/>
                            </a>
                            <div className="inner-div">
                                <ul className="">
                                    <li>
                                        <a href="index.html">Áo</a>
                                    </li>
                                    <li>
                                        <a href="about.html">Quần</a>
                                    </li>
                                    <li>
                                        <NavLink to={"/product/3"}>
                                            Mũ bảo hiểm
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="p-21 px-4">
                            <a className="text-white" href="">
                                Quản lý <i className="bi pt-2 bi-chevron-down"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}