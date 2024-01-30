import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../profile.css";
import {
  deleteAddress,
  filter_Address,
  getAddress,
} from "../../../features/address/addressSlice";
import { toast } from "react-toastify";
import Address_form from "./Address_form";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { address } from "../../../utils/types";
const accordian = ["One", "Two", "Three", "Four", "Five"];

interface props {
  setAddress_modal: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: (address: address) => void;
}

const Address: React.FC<props> = ({ setAddress_modal, onClick = () => {} }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { address, isSuccess, isError, isLoading } = useAppSelector(
    (state) => state.address
  );
  const [showAddressFormToEdit, setShowAddressFormToEdit] = useState(false);
  const [formToEdit, setFormToEdit] = useState<address>();

  async function handleDeleteBtn(item: address) {
    try {
      const data = await dispatch(deleteAddress(item._id)).unwrap();
      dispatch(filter_Address([data._id]));
      toast.warning("address deleted");
    } catch (error) {
      toast.error("try again later");
      console.error(error);
    }
  }

  function handleEditBtn(item: address) {
    setFormToEdit(item);
    setShowAddressFormToEdit(true);
  }

  function close() {
    setFormToEdit(undefined);
    setShowAddressFormToEdit(false);
  }

  useEffect(() => {
    function fetchAddress() {
      if (!isSuccess && user) {
        dispatch(getAddress(user._id));
      }
    }
    fetchAddress();
  }, [dispatch, isSuccess, user]);
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
          {isSuccess &&
            address.length &&
            address?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="accordion-item w-100  "
                  onClick={() => onClick(item)}
                >
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
                          // key = key as keyof address;
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
            })}
          {isError && <p>something went wrong</p>}
          {!isError && !isLoading && isSuccess && !address.length && (
            <p>No address</p>
          )}
        </div>
      )}
    </>
  );
};

export default Address;
