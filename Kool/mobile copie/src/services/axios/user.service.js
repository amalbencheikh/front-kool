import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://192.168.1.4:3000/api/users/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
};

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};



const UserService = {
    getPublicContent,
    getUserBoard,
};

export default UserService;
