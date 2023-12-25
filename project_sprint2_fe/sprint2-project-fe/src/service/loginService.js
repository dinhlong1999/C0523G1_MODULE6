import axios from "axios";
import {jwtDecode} from "jwt-decode";

export const URL_LOGIN = "http://localhost:8080/api/public/"

export const login = async (account) => {
    try {
        return await axios.post(URL_LOGIN+"login",account)
    }catch (e) {
        console.log(e);
    }
}
export const addAccessToken = async (jwt) => {
    try {
        localStorage.setItem("jwt",jwt);
    }catch (e) {
        console.log(e)
    }
}

export const getAccessTokenUserName =  () =>{
    const jwt = localStorage.getItem("jwt")
    if (jwt){
        return jwtDecode(jwt).sub
    }else {
        return null;
    }
}
export const getAccessTokenId =  () =>{
    const jwt = localStorage.getItem("jwt")
    if (jwt){
        return jwtDecode(jwt).id
    }else {
        return null;
    }
}
export const handleLogout = async () =>{
    localStorage.removeItem("jwt")
}

export const getRole = () => {
    const jwt = localStorage.getItem("jwt")
    if (jwt){
        return jwtDecode(jwt).role || []
    }else{
        return null
    }
}
export const getAccessToken = async () =>{
    const jwt = localStorage.getItem("jwt");
    if (jwt){
        return jwtDecode(jwt);
    }else {
        return null
    }
}