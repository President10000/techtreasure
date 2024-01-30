import { Outlet } from "react-router-dom";
import Header from "./header/Header.js";
import Footer from "./footer/Footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default Layout;
