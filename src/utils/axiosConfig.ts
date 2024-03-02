// export const base_url = "http://localhost:5000/api/"; // Replace with your API's base URL

import { loginAndRegisterRes } from "../features/auth/userService";

export const base_url = "https://ecommerce-backend-seven-pi.vercel.app/api/";

const decodeToken = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (error) {
    return null;
  }
};

const isTokenExpired = (token: string) => {
  const decodedToken = decodeToken(token);
  if (decodedToken && decodedToken?.exp) {
    // Token is expired if expiration time is less than the current time
    return decodedToken.exp * 1000 < Date.now();
  }
  // Token is invalid or doesn't contain an expiration time
  return true;
};

function decodeTokenPayload() {
  const customer = localStorage.getItem("customer");
  if (customer) {
    if (isTokenExpired(JSON.parse(customer).token)) {
      // Token is expired, remove it from local storage
      localStorage.removeItem("token");
      localStorage.removeItem("customer");
      return null;
    } else {
      // if token is not expired then send it
      return JSON.parse(customer);
    }
  } else {
    return null;
  }
}

export const local_user: loginAndRegisterRes = decodeTokenPayload();

export const config = {
  headers: {
    Authorization: `Bearer ${local_user ? local_user.token : ""}`,
    Accept: "application/json",
  },
};
export const api = {
  user: {
    register: () => `${base_url}user/register`,
    verify: { email: () => `${base_url}user/verify/email` },
    refresh: () => `${base_url}user/refresh`,
    login: () => `${base_url}user/login`,
    loginAdmin: () => `${base_url}user/admin-login`,
    logout: () => `${base_url}user/logout`,
    password: {
      forgotPassword: () => `${base_url}user/password/generate-reset-token`,
      reset: (token: string) => `${base_url}user/password/reset/${token}`,
      update: () => `${base_url}user/password/update`,
    },
    cart: {
      post: () => `${base_url}user/cart`,
      delete: () => `${base_url}user/cart`,
      // coupon: "user/cart/applycoupon",
      get: () => `${base_url}user/cart`,
    },
    order: {
      payOnDelivery: () => `${base_url}user/order/pay-on-delivery`,
      payNow: () => `${base_url}user/order/pay-now`,
      // getByUserId: (id?: string) => `user/order/by-user/${id}`,
      getById: (id?: string) => `${base_url}user/order/${id}`,
      // getAll: "user/order/all",
      update: (id: string) => `${base_url}user/order/update/${id}`,
    },
    wishlist: {
      // getByUserId: (id?: string) => `user/wishlist/by-user/${id}`,
      getById: (id?: string) => `${base_url}user/wishlist/${id}`,
      addOrRemove: (id: string) => `${base_url}user/wishlist/${id}`,
    },
    address: {
      // getByUserId: (id: string) => `user/address/by-user/${id}`,
      getById: (id: string) => `${base_url}user/address/${id}`,
      post: () => `${base_url}user/address`,
      update: (id: string) => `${base_url}user/address/${id}`,
      delete: (id: string) => `${base_url}user/address/${id}`,
    },
    edit: `${base_url}user/edit`,
    // findById: (id:string)=>`user/find/${id}`,
    // findAll: "user/find",
    // block: (id:string)=>`user/block/${id}`,
    // unBlock: (id:string)=>`user/unblock/${id}`,
    // delete: (id:string)=>`user/delete/${id}`,
  },
  product: {
    // post: "product/",
    // update: (id:string)=>`product/${id}`,
    // delete: (id:string)=>`product/${id}`,
    getById: (id: string) => `${base_url}product/${id}`,
    // rate: "product/rating",
    get: () =>`${base_url}product`,
  },
  search: {
    product: () => `${base_url}search/product`,
  },
  image: {
    post: () => `${base_url}image`,
    delete: (id: string) => `${base_url}image/${id}`,
  },
  enquiry: {
    post: () => `${base_url}enquiry`,
    update: (id: string) => `${base_url}enquiry/${id}`,
    delete: (id: string) => `${base_url}enquiry/${id}`,
    // getByUser: (id: string) => `enquiry/by-user/${id}`,
    getById: (id: string) => `${base_url}enquiry/${id}`,
    // getAll:"enquiry"
  },
};
