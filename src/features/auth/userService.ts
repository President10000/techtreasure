import axios from "axios";
import { api, base_url, config } from "../../utils/axiosConfig";
import { user } from "../../utils/types";
import { login, register } from "./userSlice";
import { toast } from "react-toastify";

const register = async (userdata: register): Promise<loginAndRegisterRes> => {
  try {
    const response = await axios.post(
      `${api.user.register()}`,
      userdata
    );
    localStorage.setItem("customer", JSON.stringify(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    toast.info("SignUp Successfull");
    return response.data as loginAndRegisterRes;
  } catch (error: any) {
    toast.error(
      error.response.data.message
        ? error.response.data.message
        : "unable to register try again later"
    );
    console.log(error);
    throw new Error(error.message);
  }
};

export type loginAndRegisterRes = {
  _id: string;
  firstname?: string;
  lastname?: string;
  email: string;
  mobile?: string;
  token: string;
  [key: string]: string | undefined;
};

const login = async (userdata: login): Promise<loginAndRegisterRes> => {
  try {
    const response = await axios.post(`${api.user.login()}`, userdata);
    localStorage.setItem("customer", JSON.stringify(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    toast.info("LogIn Successfull");
    return response.data as loginAndRegisterRes;
  } catch (error: any) {
    toast.error(
      error.response.data.message
        ? error.response.data.message
        : "internal server error"
    );
    console.log(error);
    throw new Error(error.message);
  }
};
export const authService = {
  register,
  login,
};
