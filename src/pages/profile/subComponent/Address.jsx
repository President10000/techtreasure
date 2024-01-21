import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../profile.css";
import {
  deleteAddress,
  filter_Address,
  getAddress,
} from "../../../features/user/userSlice";
import { toast } from "react-toastify";
import Address_form from "./Address_form";
const accordian = ["One", "Two", "Three", "Four", "Five"];
const Address = ({ setAddress_modal }) => {
  const dispatch = useDispatch();
  const { user, address, isSuccess } = useSelector((state) => state.auth);
  const [showAddressFormToEdit, setShowAddressFormToEdit] = useState(false);
  const [formToEdit, setFormToEdit] = useState();
  async function handleDeleteBtn(_id) {
    try {
      const { payload } = await dispatch(deleteAddress(_id));
      dispatch(filter_Address([payload._id]));
      toast.warning("address deleted");
    } catch (error) {
      toast.error("try again later");
      console.error(error.message);
    }
  }
  function handleEditBtn(item) {
    setFormToEdit(item);
    setShowAddressFormToEdit(true);
  }

  useEffect(() => {
    function fetchAddress() {
      if (!isSuccess.getAddress) {
        dispatch(getAddress(user._id));
      }
    }
    fetchAddress();
  }, [dispatch, isSuccess.getAddress, user]);

  return (
    <>
      {showAddressFormToEdit && formToEdit ? (
        <Address_form
          close={setShowAddressFormToEdit}
          formToEdit={formToEdit}
        />
      ) : null}
      <div className="container">
        <div className="d-flex justify-content-start gap-2 py-2">
          <h3>Address</h3>{" "}
          <button
            className="px-2 py-1 rounded-3"
            onClick={() => setAddress_modal(true)}
          >
            new address
          </button>
        </div>
        <div className="accordion " id="accordionExample">
          {address?.map((item, i) => {
            return (
              <div key={i} className="accordion-item col-12 col-lg-6  ">
                <h2 className="accordion-header" id={`heading${accordian[i]}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${accordian[i]}`}
                    aria-expanded="true"
                    aria-controls={`collapse${accordian[i]}`}
                  >
                    Address {i}
                  </button>
                </h2>
                <div
                  id={`collapse${accordian[i]}`}
                  className="accordion-collapse collapse show"
                  aria-labelledby={`heading${accordian[i]}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="list-group">
                      {item.address.map((item) => {
                        const { lable, value } = item;
                        return (
                          <li
                            className="list-group-item d-flex justify-content-between align-items-center"
                            key={i}
                          >
                            <label className="px-2 py-1 mx-2" htmlFor={lable}>
                              {lable}
                            </label>
                            <span className="px-2 py-1 mx-2">{value}</span>
                          </li>
                        );
                      })}
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <button
                          className="px-2 py-1 rounded-3"
                          onClick={() => handleEditBtn(item._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="px-2 py-1 rounded-3"
                          onClick={() => handleDeleteBtn(item)}
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Address;
