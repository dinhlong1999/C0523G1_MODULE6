import {NavLink} from "react-router-dom";

export function Header() {


    return (
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
                            <NavLink to={"/order"}>
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
                                        <a href="about.html">About US</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact US</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="p-21 px-5">
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
                        <li className="p-21 px-5">
                            <a className="text-white" href="">
                                Manager <i className="bi pt-2 bi-chevron-down"/>
                            </a>
                        </li>
                        <li className="p-21 px-5">
                            <a className="text-white" href="">
                                Personal <i className="bi pt-2 bi-chevron-down"/>
                            </a>
                        </li>
                        <li className="p-21 px-5">
                            <a className="text-white" href="">
                                Purchase history <i className="bi pt-2 bi-chevron-down"/>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </header>
    )
}