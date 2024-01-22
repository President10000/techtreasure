import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { logout } from "../../features/user/userSlice";
import Address_form from "./subComponent/Address_form";
import Address from "./subComponent/Address";
// const address_inputs = [
//   { value: "", label: "first name" },
//   { value: "", label: "middle name" },
//   { value: "", label: "last name" },
//   { value: "", label: "address line 1" },
//   { value: "", label: "address line 2" },
//   { value: "", label: "pin code" },
//   { value: "", label: "city" },
//   { value: "", label: "state" },
//   { value: "", label: "country" },
//   { value: "", label: "phone no" },
// ];
const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [address_modal, setAddress_modal] = useState(false);

  function logOut() {
    dispatch(logout());
  }
  // console.log(document.cookie)

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

            {address_modal ? (
              <Address_form close={setAddress_modal}  action={"CREATE"} />
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
