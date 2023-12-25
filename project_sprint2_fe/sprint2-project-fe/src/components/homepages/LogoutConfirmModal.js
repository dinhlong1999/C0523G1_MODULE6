import * as loginService from "../../service/loginService"
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export function LogoutConfirmModal(events) {
    const {show, handleCloseFn} = events;
    const navigate = useNavigate();

    const handleLogoutFn = () => {
        loginService.handleLogout();
        handleCloseFn();
        navigate("/");
        toast.info("Đăng xuất thành công!");
    }

    if (!show) {
        return null;
    }

    return (
        <>
            <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" style={{fontWeight: "bold"}}>Đăng xuất</h3>
                            <button type="button" className="btn-outline-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={handleCloseFn}></button>
                        </div>
                        <div className="modal-body">
                            <p>Bạn có chắc chắn muốn đăng xuất?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal"
                                    onClick={handleCloseFn}>Quay lại
                            </button>
                            <button type="button" className="btn btn-outline-danger"
                                     onClick={() => handleLogoutFn()}>Đăng xuất
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}