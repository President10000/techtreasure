// export const base_url = "http://localhost:5000/api/"; // Replace with your API's base URL

export const base_url = "https://ecommerce-backend-seven-pi.vercel.app/api";
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
    register: "/api/user/register",
    refresh: "/api/user/refresh",
    login: "/api/user/login",
    loginAdmin: "/api/user/admin-login",
    logout: "/api/user/logout",
    password: {
      forgotPassToken: "/api/user/password/logout/forgot-token",
      reset: "/api/user/password/logout/reset/:token",
      update: "/api/user/password/logout/update",
    },
    cart: {
      post: "/api/user/cart",
      delete: "/api/user/cart",
      coupon: "/api/user/cart/applycoupon",
      get: "/api/user/cart",
    },
    order: {
      payOnDelivery: "/api/user/order/pay-on-delivery",
      payNow: "/api/user/order/pay-now",
      getByUserId: "/api/user/order/by-user/:id",
      getById: "/api/user/order/by-id/:id",
      // getAll: "/api/user/order/all",
      update: "/api/user/order/update/:id",
    },
    wishlist: {
      getByUserId: "/api/user/wishlist/by-user/:id",
      getById: "/api/user/wishlist/by-id/:id",
      addOrRemove: "/api/user/wishlist/:id",
    },
    address: {
      getByUserId: "/api/user/address/by-user/:id",
      getById: "/api/user/address/by-id/:id",
      post: "/api/user/address/",
      update: "/api/user/address/:id",
      delete: "/api/user/address/:id",
    },
    edit: "/api/user/edit",
    // rest of the routes are only for admin
  },
  product: {
    getById: "/api/product/",
    rate: "/api/product/rating",
    getAll: "/api/product",
    // rest of the routes are only for admin
  },
  search: {
    product: "/api/search/product",
  },
  enquiry: {
    post: "/api/enquiry",
    update: "/api/enquiry/:id",
    delete: "/api/enquiry/:id",
    getByUser: "api/enquiry/by-user/:id",
    getById: "api/enquiry/by-id/:id",
  },
};
