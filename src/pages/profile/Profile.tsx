import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./profile.css";
import { logout } from "../../features/auth/userSlice";
import Address_form from "./subComponent/Address_form";
import Address from "./subComponent/Address";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginAndRegisterRes } from "../../features/auth/userService";
import axios from "axios";
import { api, base_url, config } from "../../utils/axiosConfig";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [address_modal, setAddress_modal] = useState(false);

  function handleEditBtn(user: loginAndRegisterRes) {
    
  }

  async function handleVerifyEmail() {
    try {
      const res = await axios.post(
        `${base_url}${api.user.verify.email}`,
        {},
        config
      );
      if (res.data.status) {
        alert("Verification Link sent to your Registered email address");
      } else {
        toast.error("try again later");
      }
    } catch (error) {
      toast.error("try again later");
    }
  }

  function logOut() {
    dispatch(logout());
  }

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <>
      {user ? (
        <>
          <div className="container d-flex flex-column gap-2 pb-4">
            <div className="d-flex justify-content-between flex-wrap  py-2">
              <div className="accordion col-12 col-lg-6 " id="user">
              <div>
                <h4>User</h4>
              </div>
                <div className="accordion-item w-100 ">
                  <h2 className="accordion-header" id={`headingUser`}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseUser`}
                      aria-expanded="true"
                      aria-controls={`collapseUser`}
                    >
                      {user.firstname + " " + user.lastname}
                    </button>
                  </h2>
                  <div
                    id={`collapseUser`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`headingUser`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="list-group">
                        {Object.keys(user)?.map((key, j) => {
                          if (["token", "_id"].includes(key)) return null;
                          return (
                            <li
                              className="list-group-item d-flex justify-content-between align-items-center"
                              key={j}
                            >
                              <label className="px-2 py-1 mx-2" htmlFor={key}>
                                {key}
                              </label>
                              <span className="px-2 py-1 mx-2">
                                {user[key]}
                              </span>
                            </li>
                          );
                        })}
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <button
                            className="px-2 py-1 rounded-3"
                            onClick={() => handleEditBtn(user)}
                          >
                            Edit
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="m-1 m-lg-0 py-lg-1 px-2 rounded-3"
                  onClick={() => logOut()}
                >
                  LOGOUT
                </button>
              </div>
            </div>

            <div className="w-100">
              <div className="d-flex justify-content-start gap-2 py-2">
                <h4>Address</h4>
                <button
                  className="px-2 rounded-3"
                  onClick={() => setAddress_modal(true)}
                >
                  new address
                </button>
              </div>
              <div className="col-12 col-lg-6">
                {!address_modal ? (
                  <Address setAddress_modal={setAddress_modal} />
                ) : (
                  <Address_form close={setAddress_modal} />
                )}
              </div>
            </div>
            <div className="col-12">
              <div>
                <h4>Other Links :</h4>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-evenly flex-wrap  gap-2 py-2 border border-secondary rounded-3">
                {[
                  { nav: "orders", title: "Orders", onClick: () => {} },
                  { nav: "#", title: "Reset Password", onClick: () => {} },
                  {
                    nav: "#",
                    title: "Verify Email",
                    onClick: () => handleVerifyEmail(),
                  },
                ].map((button, i) => {
                  return (
                    <h5
                      onClick={() => button.onClick()}
                      key={i}
                      className="border border-secondary rounded-2 px-2 "
                    >
                      <Link to={`${button.nav}`}>{button.title}</Link>
                    </h5>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Profile;
