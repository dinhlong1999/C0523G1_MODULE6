import axios from "axios";

const URL_ORDER = "http://localhost:8080/api/member/order"

export const saveOrder = async (cartDetail) => {
    try {
        console.log(cartDetail.cartDetailList);
        return await  axios.post(URL_ORDER,cartDetail.cartDetailList)
    }catch (e) {
        console.log(e)
    }
}



export const getOrderByUserId = async (id) =>{
    try {
        return await axios.get(URL_ORDER+"/history-buy/"+id)
    }catch (e) {
        console.log(e)
    }
}