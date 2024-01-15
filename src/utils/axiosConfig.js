// export const base_url = "http://localhost:5000/api/"; // Replace with your API's base URL
export const base_url = "https://ecommerce-backend-seven-pi.vercel.app/api/"; // Replace with your API's base URL

const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
