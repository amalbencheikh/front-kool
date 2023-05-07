import axios from "axios";
import { loginAccount, logOutAccount } from "../../context/userSlice";
import { store } from "../../context/store";

const API_URL = "http://192.168.1.4:3000/api/users/";

const register = async (fullName, email, password) => {
  console.log(fullName, email, password);
  const response = await axios.post(
    "http://192.168.43.4:3000/api/users/sign-up",
    {
      fullName,
      email,
      password,
    }
  );
  return response;
  /*   return axios
    .post(API_URL + "sign-up", {
      email,
      password,
      fullName,
    })
    .then((res) => {
      store.dispatch(loginAccount(res.data.accessToken));
    }); */
};

const login = async (email, password) => {
  console.log(email, password);
  const response = await axios.post(
    "http://192.168.43.4:3000/api/users/sign-in",
    {
      email,
      password,
    }
  );
  console.log(response);
  /* return axios
    .post(API_URL + "sign-in", {
      email: email,
      password,
    })
    .then((response) => {
      store.dispatch(loginAccount(response.data.accessToken));
    }); */
};

const logout = () => {
  store.dispatch(logOutAccount());
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
