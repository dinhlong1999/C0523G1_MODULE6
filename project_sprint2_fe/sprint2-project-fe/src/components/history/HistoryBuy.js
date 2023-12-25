import {useEffect, useState} from "react";
import {Header} from "../homepages/Header";
import {Footer} from "../homepages/Footer";
import * as loginService from "../../service/loginService"
import * as orderService from "../../service/orderService"
import {format} from "date-fns";
import * as userService from "../../service/userService";
import {NavLink} from "react-router-dom";

export function HistoryBuy() {
    const [order, setOrderList] = useState();
    const accountId = loginService.getAccessTokenId();


    useEffect(()=>{
        getUserByAccountId();
    },[]);

    const getUserByAccountId = async () => {
        try {
            const result = await userService.getUserByAccountId(accountId);
            console.log(result);
            getOrderBill(result.data.id)
        }catch (e) {
            console.log(e)
        }
    }


    const getOrderBill = async  (userId) => {
        try {
            const result = await orderService.getOrderByUserId(userId);
            console.log(userId)
            console.log(result)
            setOrderList(result.data);
        }catch (e) {
            console.log(e)
        }

    }
    if (!order){
        return null;
    }

    return(
        <div >
            <Header/>
                <div className="container">
                    <div style={{display:"flex",justifyContent:"center"}} className="col-10 text-center mx-auto m-2">
                        <h2 className={"col-md-6 col-12 shadow-md"}>Lịch sử mua hàng</h2>
                    </div>
                    <NavLink to={"/"}>
                        <button type="button" className="btn btn-danger m-3">Quay lại trang chủ</button>
                    </NavLink>
                    <table className={"table table-bordered table-hover m-3 shadow-md bg-white"}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Ngày mua</th>
                                <th>Số lượng</th>
                                <th>Giá tiền</th>
                            </tr>
                        </thead>

                        {order.length > 0 ? (
                            <tbody>
                            {order.map((item,index) =>
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td style={{width:"20%"}}><img src={item.images} alt="images" style={{maxWidth:"35%"}}/></td>
                                    <td>{item.productName}</td>
                                    <td>{format(item.dateBuy,'dd-MM-yyyy HH:mm:ss')}</td>
                                    <td>{item.quantity}</td>
                                    <td>{ new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(item.detailPrice)}</td>

                                </tr>
                            )}
                            </tbody>
                        ) : (<td colSpan={6} style={{textAlign:"center"}}>Không có dữ liệu</td>)}

                    </table>
                </div>
            <Footer/>
        </div>

    )
}