import axios from "axios";
import { base_url } from "../../utils/axiosConfig";
const register = async (userdata) => {
  const response = await axios.post(`${base_url}user/register`, userdata);
  if (response.data) {
    return response.data;
  }
};
const login = async (userdata) => {
  const response = await axios.post(`${base_url}user/login`, userdata);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data;
  }
};

export const authService = {
  register,
  login,
};
