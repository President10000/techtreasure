import axios from "axios";
import { api, base_url, config } from "../../utils/axiosConfig";
import { user } from "../../utils/types";
import { login, register } from "./userSlice";

const register = async (userdata: register): Promise<loginAndRegisterRes> => {
  try {
    const response = await axios.post(`${base_url}${api.user.register}`, userdata);
    return response.data as loginAndRegisterRes;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export type loginAndRegisterRes = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  token: string;
};

const login = async (userdata: login): Promise<loginAndRegisterRes> => {
  try {
    const response = await axios.post(`${base_url}${api.user.login}`, userdata);
    localStorage.setItem("customer", JSON.stringify(response.data));
    return response.data as loginAndRegisterRes;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const authService = {
  register,
  login,
};
