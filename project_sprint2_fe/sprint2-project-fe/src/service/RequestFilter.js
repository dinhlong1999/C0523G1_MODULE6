import axios from "axios";

const requestFilter = () => {
    axios.interceptors.request
        .use((request) => {
            const jwt = localStorage.getItem("jwt");
            if (jwt) {
                request.headers.Authorization = `Bearer ${jwt}`
                request.headers["Content-Type"] = "application/json"
            }
            return request;
        })
}

export {requestFilter};