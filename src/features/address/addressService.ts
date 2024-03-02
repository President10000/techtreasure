import axios from "axios";
import { api, base_url, config } from "../../utils/axiosConfig";
import { address } from "../../utils/types";

const getUserAddress = async (user_id: string): Promise<address[]> => {
  try {
    const response = await axios.get(
      `${api.user.address.getById(user_id)}`,
      config
    );
    return response.data as address[];
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

export interface toUpdate extends addressToPost {
  _id: string;
}
const postUserAddress = async (address: addressToPost): Promise<address> => {
  try {
    const response = await axios.post(
      `${api.user.address.post()}`,
      address,
      config
    );
    return response.data as address;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const updateUserAddress = async (data: toUpdate) => {
  try {
    const response = await axios.put(
      `${api.user.address.update(data._id)}`,
      { address: data },
      config
    );
    return response.data as address;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const deleteUserAddress = async (_id: string) => {
  try {
    const response = await axios.delete(
      `${api.user.address.delete(_id)}`,
      config
    );
    return response.data as address;
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
