import axios from "axios";

const URL_PRODUCT = "http://localhost:8080/api/product";
const URL_DETAIL = "http://localhost:8080/api/images/product/";


export const getListProduct = async (id,currentPage,productName,categoryDetailName) => {
    try {
        return await axios.get(URL_PRODUCT + `/${id}?categoryDetailName=${categoryDetailName}&page=${currentPage}&productName=${productName}`);
    }catch (e) {
        console.log(e)
    }
}

export const getDetailProductImages = async (id) => {
  try {
      return await axios.get(URL_DETAIL+id)
  }catch (e) {
      console.log(e)
  }
}

export const getProductDetail = async (id) => {
    try {
        return await axios.get(URL_PRODUCT+"/detail/"+ id)
    }catch (e) {
        console.log(e)
    }
}