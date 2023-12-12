import axios from "axios";

const URL_CART = "http://localhost:8080/api/cart/"

export const getCartByUserId = async (id) => {
  try {
      return await axios.get(URL_CART+id);
  }catch (e) {
      console.log(e)
  }
}