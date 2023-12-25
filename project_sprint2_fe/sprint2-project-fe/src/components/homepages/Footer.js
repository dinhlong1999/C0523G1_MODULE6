export function Footer() {

    return (
        <footer>
            <div className="inner">
                <div className="con tainer">
                    <div className="row">
                        <div className="col-md-3 foot-post">
                            <h4>Liên hệ chúng tôi</h4>
                            <div className="post-row">
                                <div className="detail">
                                    <span>Pedal Paradise Store</span>
                                </div>
                            </div>
                            <div className="post-row">
                                <div className="detail">
                                    <span>Địa chỉ: 04 Nguyễn Giản Thanh, P.An Khê, Q.Thanh Khê, TP.Đà Nẵng</span>
                                </div>
                            </div>
                            <div className="post-row">
                                <div className="detail">
                                    <span>Số điện thoại: 0932533481</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 foot-post">
                            <h4>Hỗ trợ 24/7 </h4>
                            <div className="post-row">
                                <div className="detail ps-2">
                                    <span>Hỗ trợ 24H/ngày và 7ngày/tuần</span>
                                </div>
                            </div>
                            <div className="post-row">
                                <div className="detail p-2">
                                    <span>Gỉai đáp những thắc mắc của khách hàng</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3 foot-services">
                            <h4>Tuyển dụng</h4>
                            <ul>
                                <li>
                                    Quy trình tuyển dụng
                                </li>
                                <li>
                                    Vị trí tuyển dụng
                                </li>
                                <li>
                                    Ứng tuyển ngay
                                </li>
                                <li>
                                    Tại sao bạn lại chọn Pedal Paradise Store
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 foot-news">
                            <h4>Phản hồi</h4>
                            Hãy để lại góp ý để chúng tôi phục vụ tốt hơn
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