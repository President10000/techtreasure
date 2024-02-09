import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Custominput from "../../components/Custominput";
import "./forgotpassword.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { api, base_url } from "../../utils/axiosConfig";
const Forgotpassword = () => {
  const [email, setEmail] = useState("");
async  function handleForgetPassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await axios.post(`${base_url}${api.user.password.forgotPassword}`)
      alert("Check you registerd mail's inbox to reset your password")
    } catch (error) {
      console.error(error)
      toast.error("try again later")
    }
  }
  return (
    <>
      <Meta title={"ForgotPassword"} />
      <BreadCrumb title="ForgotPassword" />
      <Container className="login-wraper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 d-flex  justify-content-center align-item-center">
            <div className="auth-card col-10 col-md-8 col-lg-6">
              <h3 className="text-center mb-3 ">Forgot Password</h3>
              <p className="text-center my-2 mb-3 ">
                we will send you a link to reset your password.
              </p>
              <form
                onSubmit={(e) => handleForgetPassword(e)}
                className="d-flex flex-column gap-15"
              >
                <Custominput
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="Email"
                />

                <div>
                  <div className=" mt-3 d-flex justify-content-center flex-column  gap-15 align-items-center   ">
                    <button className="button border-0 " type="submit">
                      Submit
                    </button>

                    <Link to="/login" className="button signup">
                      Cancel
                    </Link>
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

export default Forgotpassword;
