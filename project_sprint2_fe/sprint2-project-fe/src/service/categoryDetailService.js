import axios from "axios";

const URL = "http://localhost:8080/api/public/category-detail/"

export const getAllCategoryDetailById = async (id) => {
    try {
        return await axios.get(URL+ id)
    }catch (e) {
        console.log(e)
    }
  
}
export const getAllCategoryDetail = async () =>{
    try {
        return await axios.get(URL);
    }catch (e) {
        console.log(e);
    }
}