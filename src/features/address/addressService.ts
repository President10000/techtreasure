import axios from "axios";
import { api, base_url, config } from "../../utils/axiosConfig";
import { address } from "../../utils/types";

const getUserAddress = async (user_id: string): Promise<address[]> => {
  try {
    const response = await axios.get(
      `${base_url}${api.user.address.getByUserId}?user=${user_id}`,
      config
    );
    // if (response.data) {
    return response.data as address[];
    // }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export interface addressToPost {
  phone_no: string;
  country: string;
  first_name: string;
  last_name: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zipcode: string;
}
export interface toUpdate {
  address: addressToPost;
  _id: string;
}
const postUserAddress = async (address: addressToPost): Promise<address> => {
  try {
    const response = await axios.post(
      `${base_url}${api.user.address.post}`,
      address,
      config
    );
    // if (response.data) {
    return response.data as address;
    // }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const updateUserAddress = async (data: toUpdate) => {
  try {
    const response = await axios.put(
      `${base_url}${api.user.address.update}`,
      { address: data },
      config
    );
    // if (response.data) {
    return response.data as address;
    // }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const deleteUserAddress = async (_id: string) => {
  try {
    const response = await axios.delete(
      `${base_url}${api.user.address.delete}?id=${_id}`,
      config
    );
    // if (response.data) {
    return response.data as address;
    // }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export {
  getUserAddress,
  postUserAddress,
  updateUserAddress,
  deleteUserAddress,
};
