import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editAddress,
  push_Addres,
  replace_OneAddres,
  saveAddress,
} from "../../../features/user/userSlice";
import { toast } from "react-toastify";

const Address_form = ({ close, form, action, id }) => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState([...form]);

  function formHandler(e) {
    setAddress((pre) => {
      return pre.map((item) => {
        if (item.label === e.target.name) {
          item.value = e.target.value;
        }
        return item;
      });
    });
  }

  async function saveHandler(e) {
    e.preventDefault();

    try {
      if (action === "CREATE") {
        const { payload } = await dispatch(saveAddress(address));
        dispatch(push_Addres([payload]));
        toast.success("address saved successfully");
        setAddress([...form]);
        close(false);
      } else if (action === "EDIT" && id) {
        const { payload } = await dispatch(editAddress({ address, _id: id }));
        dispatch(replace_OneAddres({ address: payload, _id: id }));
        toast.success("address edited successfully");
      } else if (!id) {
        toast.error(`can not get id ${id}`);
      } else {
        toast.error(`${action} type not recognized`);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "900px",
        zIndex: 10,
      }}
      className="bg-primary position-absolute top-0 left-0 d-flex justify-content-center  align-items-center"
    >
      <form
        onSubmit={(e) => saveHandler(e)}
        className="d-flex justify-content-center flex-column align-items-center"
      >
        <div className="d-flex justify-content-start gap-2 py-2">
          <button
            type="button"
            className="px-2 py-1 rounded-3"
            onClick={() => close(false)}
          >
            Back
          </button>
        </div>
        <ul className="list-group">
          {address.map((item, i) => {
            const { label, value } = item;
            return (
              <li
                key={i}
                className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-center"
              >
                <label className="px-2 py-1 mx-2" htmlFor={label}>
                  {label}
                </label>
                <input
                  required={
                    ["middle name", "address line 2"].includes(label)
                      ? false
                      : true
                  }
                  value={value}
                  onChange={(e) => formHandler(e)}
                  className="px-2 py-1 mx-2"
                  name={label}
                  id={label}
                />
              </li>
            );
          })}
        </ul>
        <div className="d-flex justify-content-start gap-2 py-2">
          <button
            type="button"
            className="px-2 py-1 rounded-3"
            onClick={() => close(false)}
          >
            Cancle
          </button>
          <button type="submit" className="px-2 py-1 rounded-3">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address_form;
