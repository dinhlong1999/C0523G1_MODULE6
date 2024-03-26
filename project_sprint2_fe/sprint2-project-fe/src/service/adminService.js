import axios from "axios";

const URL_ADMIN = "http://localhost:8080/api/admin/user-buy";

export const getListUserBuy  = async (yearBuy) => {
  try {
      return await axios.get(URL_ADMIN + `?yearBuy=${yearBuy}`)
  }catch (e) {
      console.log(e)
  }
}