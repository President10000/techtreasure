// export const base_url = "http://localhost:5000/api/"; // Replace with your API's base URL

export const base_url = "https://ecommerce-backend-seven-pi.vercel.app/api/";
const customer = localStorage.getItem("customer");
export const getTokenFromLocalStorage = customer ? JSON.parse(customer) : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
export const api = {
  user: {
    register: "user/register",
    refresh: "user/refresh",
    login: "user/login",
    loginAdmin: "user/admin-login",
    logout: "user/logout",
    password: {
      forgotPassToken: "user/password/logout/forgot-token",
      reset: (token:string)=>`user/password/logout/reset/${token}`,
      update: "user/password/update",
    },
    cart: {
      post: "user/cart",
      delete: "user/cart",
      coupon: "user/cart/applycoupon",
      get: "user/cart",
    },
    order: {
      payOnDelivery: "user/order/pay-on-delivery",
      payNow: "user/order/pay-now",
      getByUserId: (id:string)=>`user/order/by-user/${id}`,
      getById: (id:string)=>`user/order/by-id/${id}`,
      // getAll: "user/order/all",
      update: (id:string)=>`user/order/update/${id}`,
    },
    wishlist: {
      getByUserId: (id:string)=>`user/wishlist/by-user/${id}`,
      getById: (id:string)=>`user/wishlist/by-id/${id}`,
      addOrRemove: (id:string)=>`user/wishlist/${id}`,
    },
    address: {
      getByUserId: (id:string)=>`user/address/by-user/${id}`,
      getById: (id:string)=>`user/address/by-id/${id}`,
      post: "user/address/",
      update: (id:string)=>`user/address/${id}`,
      delete: (id:string)=>`user/address/${id}`,
    },
    edit: "user/edit",
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
    getById: (id:string)=>`product/${id}`,
    rate: "product/rating",
    getAll: "product/",
  },
  search: {
    product: "search/product",
  },
  image: {
    post: "image",
    delete: (id:string)=>`image/${id}`,
  },
  enquiry: {
    post: "enquiry",
    update: (id:string)=>`enquiry/${id}`,
    delete: (id:string)=>`enquiry/${id}`,
    getByUser: (id:string)=>`enquiry/by-user/${id}`,
    getById: (id:string)=>`enquiry/by-id/${id}`,
    // getAll:"enquiry"
  },
};


