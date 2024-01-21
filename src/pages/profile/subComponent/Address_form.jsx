import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editAddress,
  push_Addres,
  replace_OneAddres,
  saveAddress,
} from "../../../features/user/userSlice";
import { toast } from "react-toastify";
const address_inputs = [
  { value: "", label: "first name" },
  { value: "", label: "middle name" },
  { value: "", label: "last name" },
  { value: "", label: "address line 1" },
  { value: "", label: "address line 2" },
  { value: "", label: "pin code" },
  { value: "", label: "city" },
  { value: "", label: "state" },
  { value: "", label: "country" },
  { value: "", label: "phone no" },
];
const Address_form = ({ close, formToEdit }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [action, setAction] = useState("CREATE");
  const [address, setAddress] = useState([...address_inputs]);
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

  // function validateForm() {

  // }

  async function saveHandler(e) {
    e.preventDefault();
    try {
      if (action === "CREATE") {
        const saved = await dispatch(saveAddress(address));
        dispatch(push_Addres([saved]));
        toast.success("address saved successfully");
        setAddress([...address_inputs]);
      } else if (action === "EDIT") {
        const edited = await dispatch(editAddress(address, formToEdit._id));
        dispatch(replace_OneAddres({ address: edited, _id: formToEdit._id }));
        toast.success("address edited successfully");
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    function isToEdit() {
      if (formToEdit?.address?.length) {
        setAddress(formToEdit.address);
        setAction("EDIT");
      }
    }
    isToEdit();
  }, [formToEdit]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "600px",
        zIndex: 10,
      }}
      className="bg-primary position-absolute top-0 left-0 d-flex justify-content-center  align-items-center"
    >
      <form
        onSubmit={(e) => saveHandler(e)}
        className="d-flex justify-content-center flex-column align-items-center"
      >
        <ul className="list-group">
          {address.map((item, i) => {
            const { label, value } = item;
            return (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <label className="px-2 py-1 mx-2" htmlFor={label}>
                  {label}
                </label>
                <input
                  required
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
