import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getOrders = async () => {
 try {
    const response = await axios.get(`${base_url}user/get-orders?populate=products.product`,config);

    return response.data;
 } catch (error) {
    throw new Error(error.message)
 }
};

const OrderService = {
    getOrders,
};

export default OrderService;
