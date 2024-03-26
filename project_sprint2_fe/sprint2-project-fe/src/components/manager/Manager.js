import {Header} from "../homepages/Header";
import {Footer} from "../homepages/Footer";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import * as adminService from "../../service/adminService"

export function Manager() {
    const [userBuy, setUserBuy] = useState([]);
    const [year, setYear] = useState("");

    useEffect(() => {
        getUserBuy();
    }, [year]);

    const getUserBuy = async () => {
        const result = await adminService.getListUserBuy(year);
        setUserBuy(result.data);
    }
    return (
        <div>
            <Header/>
            <div className="container">
                <div style={{display: "flex", justifyContent: "center"}} className="col-10 text-center mx-auto m-2">
                    <h2 className={"col-md-6 col-12 shadow-md"} style={{width:"75%"}}>Danh sách khách hàng đã mua</h2>
                </div>
                <select className={"select"} onChange={(event) => setYear(event.target.value)}>
                    <option value="">Năm hiện tại</option>
                    <option className={"text-center"} value={2023}>Năm 2023</option>
                    <option className={"text-center"} value={2022}>Năm 2022</option>
                    <option className={"text-center"} value={2021}>Năm 2021</option>
                </select>
                <NavLink to={"/"}>
                    <button type="button" className="btn btn-danger m-3">Quay lại trang chủ</button>
                </NavLink>
                <table className={"table table-bordered table-hover m-3 shadow-md bg-white"}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên khách hàng</th>
                        <th>Số điện thoại</th>
                        <th>Ngày mua</th>
                        <th>Xem chi tiết đơn hàng</th>
                    </tr>
                    </thead>
                    {userBuy.length > 0 ? (
                        <tbody>
                        {userBuy.map((item, index) =>
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.dateBuy}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-danger">Chi tiết</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>) : (<td colSpan={5}>Không có dữ liệu</td>)}

                </table>
            </div>
            <Footer/>
        </div>
    )
}