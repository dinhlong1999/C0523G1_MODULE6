import axios from "axios";

export const URL_HOME = "http://localhost:8080/api/home";

export const getProductNew = async () => {
    try {
        return await axios.get(URL_HOME);
    }catch (e) {
        console.log(e)
    }
}