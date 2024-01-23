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
const Address = ({ setAddress_modal,onClick=()=>{} }) => {
  const dispatch = useDispatch();
  const { user, address, isSuccess } = useSelector((state) => state.auth);
  const [showAddressFormToEdit, setShowAddressFormToEdit] = useState(false);
  const [formToEdit, setFormToEdit] = useState();

  async function handleDeleteBtn(item) {
    try {
      const { payload } = await dispatch(deleteAddress(item._id));
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

  function close() {
    setFormToEdit(undefined);
    setShowAddressFormToEdit(false);
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
          close={close}
          form={{ ...JSON.parse(JSON.stringify(formToEdit)) }}
          action={"EDIT"}
          id={formToEdit._id}
        />
      ) : (
        <div className="accordion " id="accordionExample">
          {address.length
            ? address.map((item, i) => {
                return (
                  <div key={i} className="accordion-item w-100  " onClick={()=>onClick(item)}>
                    <h2
                      className="accordion-header"
                      id={`heading${accordian[i]}`}
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${accordian[i]}`}
                        aria-expanded="true"
                        aria-controls={`collapse${accordian[i]}`}
                      >
                        Address {i + 1}
                      </button>
                    </h2>
                    <div
                      id={`collapse${accordian[i]}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${accordian[i]}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <ul className="list-group">
                          {Object.keys(item)?.map((key, j) => {
                            return (
                              <li
                                className="list-group-item d-flex justify-content-between align-items-center"
                                key={j}
                              >
                                <label className="px-2 py-1 mx-2" htmlFor={key}>
                                  {key}
                                </label>
                                <span className="px-2 py-1 mx-2">
                                  {item[key]}
                                </span>
                              </li>
                            );
                          })}
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            <button
                              className="px-2 py-1 rounded-3"
                              onClick={() => handleEditBtn(item)}
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
              })
            : isSuccess?.getAddress
            ? "No address"
            : "Loading"}
        </div>
      )}
    </>
  );
};

export default Address;
