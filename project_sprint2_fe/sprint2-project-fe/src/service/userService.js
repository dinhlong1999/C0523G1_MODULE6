import axios from "axios";

const URL_USER = "http://localhost:8080/api/user/"

export const getUserByAccountId = async (id) => {
    try {
        return await axios.get(URL_USER+id);
    }catch (e){
        console.log(e)
    }
}