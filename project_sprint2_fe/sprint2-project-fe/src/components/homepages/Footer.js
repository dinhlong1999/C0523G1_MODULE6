export function Footer() {

    return(
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
    )

}