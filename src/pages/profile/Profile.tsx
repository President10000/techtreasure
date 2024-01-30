import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./profile.css";
import { logout } from "../../features/auth/userSlice";
import Address_form from "./subComponent/Address_form";
import Address from "./subComponent/Address";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [address_modal, setAddress_modal] = useState(false);

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
          <div className="container pb-4">
            <div className="d-flex justify-content-between  py-2">
              <ul className="info ps-0">
                <li>
                  <h4>First name</h4> <p>{user.firstname}</p>
                </li>
                <li>
                  <h4>Last name</h4> <p>{user.lastname}</p>
                </li>
                <li>
                  <h4>Email</h4> <p>{user.email}</p>
                </li>
                <li>
                  <h4>Phone</h4> <p>{user.mobile}</p>
                </li>
              </ul>
              <div>
                <button
                  className="py-1 px-2 rounded-3"
                  onClick={() => logOut()}
                >
                  LOGOUT
                </button>
              </div>
            </div>
            <div>
             <h3> <Link to={'orders'}>Orders</Link></h3>
            </div>
            <div className="w-100">
              <div className="d-flex justify-content-start gap-2 py-2">
                <h3>Address</h3>
                <button
                  className="px-2 py-1 rounded-3"
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
          </div>
        </>
      ) : null}
    </>
  );
};

export default Profile;
