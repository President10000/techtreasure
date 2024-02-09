import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";

import Container from "../../components/Container";
import Custominput from "../../components/Custominput";
import "./resetpassword.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { api, base_url, config } from "../../utils/axiosConfig";
import { useNavigate } from "react-router-dom";
import { loginAndRegisterRes } from "../../features/auth/userService";

// this component is used in both condition
// when user want to login but forgot his password or user is logged in and want to change his password

const Resetpassword = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);
  const token = query.get("token") as undefined | string;
  const [newPass, setNewPass] = useState({
    password: "",
    confirm_password: "",
  });

  async function onResetHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newPass.password !== newPass.confirm_password) {
      toast.error("password and confirm password are not maching");
      return;
    }
    try {
      if (token) {
        // when user forgot his password then a token need to reset
        await axios.put(`${base_url}${api.user.password.reset(token)}`);
        navigate("/login");
      } else {
        // here user is logged in and want to update his password
        const res = await axios.put(
          `${base_url}${api.user.password.forgotPassword}`,
          { password: newPass.password },
          config
        );
        const { status, user }: { status: boolean; user: loginAndRegisterRes } =
          res.data;
        localStorage.setItem("customer", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(user.token));

        toast.success("password updated successfully");
        navigate("/profile");
      }
    } catch (error) {
      console.error(error);
      toast.error("try again later");
    }
  }
  return (
    <>
      <Meta title={"Reset password"} />
      <BreadCrumb title="Reset password" />

      <Container className="login-wraper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 d-flex align-item-center justify-content-center">
            <div className="auth-card col-12 col-md-8 col-lg-6 ">
              <h3 className="text-center mb-3 ">Reset Password</h3>
              <form
                onSubmit={(e) => onResetHandler(e)}
                className="d-flex flex-column gap-15"
              >
                <Custominput
                  onChange={(e) =>
                    setNewPass((pre) => ({ ...pre, password: e.target.value }))
                  }
                  value={newPass.password}
                  type="password"
                  name="password"
                  placeholder="New Password"
                />
                <Custominput
                  onChange={(e) =>
                    setNewPass((pre) => ({
                      ...pre,
                      confirm_password: e.target.value,
                    }))
                  }
                  value={newPass.confirm_password}
                  type="password"
                  name="confirm-password"
                  placeholder="Confirm Password"
                />

                <div>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center   ">
                    <button className="button border-0 " type="submit">
                      Reset Password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resetpassword;
