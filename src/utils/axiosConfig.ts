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
      reset: "user/password/logout/reset/:token",
      update: "user/password/logout/update",
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
      getByUserId: "user/order/by-user/:id",
      getById: "user/order/by-id/:id",
      // getAll: "user/order/all",
      update: "user/order/update/:id",
    },
    wishlist: {
      getByUserId: "user/wishlist/by-user/:id",
      getById: "user/wishlist/by-id/:id",
      addOrRemove: "user/wishlist/:id",
    },
    address: {
      getByUserId: "user/address/by-user/:id",
      getById: "user/address/by-id/:id",
      post: "user/address/",
      update: "user/address/:id",
      delete: "user/address/:id",
    },
    edit: "user/edit",
    // rest of the routes are only for admin
  },
  product: {
    getById: "product/",
    rate: "product/rating",
    getAll: "product",
    // rest of the routes are only for admin
  },
  search: {
    product: "search/product",
  },
  enquiry: {
    post: "enquiry",
    update: "enquiry/:id",
    delete: "enquiry/:id",
    getByUser: "enquiry/by-user/:id",
    getById: "enquiry/by-id/:id",
  },
};
