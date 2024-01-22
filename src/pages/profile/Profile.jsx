import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { logout } from "../../features/user/userSlice";
import Address_form from "./subComponent/Address_form";
import Address from "./subComponent/Address";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          <div className=" pb-4">
            <div className="d-flex justify-content-between container py-2">
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

            {address_modal ? (
              <Address_form close={setAddress_modal} />
            ) : (
              <Address setAddress_modal={setAddress_modal} />
            )}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Profile;
