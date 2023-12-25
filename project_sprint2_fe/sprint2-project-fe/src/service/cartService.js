import axios from "axios";

const URL_CART = "http://localhost:8080/api/member/cart/"

export const getCartByUserId = async (id) => {
  try {
      return await axios.get(URL_CART+id);
  }catch (e) {
      console.log(e);
  }
}

export const getCardByProductIdAndUserId = async (productId,userId) => {
  try {
      return await axios.get(URL_CART+productId+"/"+userId);
  }catch (e) {
      console.log(e);
  }
}

export const addToCart = async (cartDTO) =>{
    try {
        return await axios.post(URL_CART,cartDTO)
    }catch (e) {
        console.log(e)
    }
}

export const deleteToCart = async (id) =>{
    try {
        return await axios.delete(URL_CART+id)
    }catch (e) {
        console.log(e)
    }
}

export const getCartByCartId = async (id) =>{
    try {
        return await axios.get(URL_CART + "detail/" + id)
    }catch (e) {
        console.log(e)
    }
}
export const updateQuantityCart = async (id,cartDTO) => {
    try {
        return await axios.patch(URL_CART + "update-quantity/"+id,cartDTO)
    }catch (e) {
        console.log(e)
    }
}