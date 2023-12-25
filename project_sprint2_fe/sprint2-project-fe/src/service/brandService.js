import axios from "axios";

const URL_BRAND = "http://localhost:8080/api/public/product/brand/";

export const getAllProductByBrand = async (id,currentPage,categoryDetailName,productName) => {
    try {
        return await axios.get(URL_BRAND+id+`?categoryDetailName=${categoryDetailName}&productName=${productName}&page=${currentPage}`)
    }catch (e) {
        console.log(e);
    }

}