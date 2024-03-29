import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editAddress,
  push_Addres,
  replace_OneAddres,
  saveAddress,
} from "../../../features/address/addressSlice";
import { toast } from "react-toastify";
import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { address } from "../../../utils/types";
import { addressToPost } from "../../../features/address/addressService";
const default_data = {
  phone_no: "",
  country: "DEFAULT",
  first_name: "",
  last_name: "",
  address: "",
  apartment: "",
  city: "",
  state: "DEFAULT",
  zipcode: "",
};

interface props {
  close: React.Dispatch<React.SetStateAction<boolean>>;
  form?: typeof default_data;
  action?: "CREATE" | "EDIT";
  id?: string;
}

const Address_form: React.FC<props> = ({
  close,
  form = default_data,
  action = "CREATE",
  id,
}) => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<addressToPost>({ ...form });

  function formOnChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  }

  async function saveHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (action === "CREATE") {
        const address = await dispatch(saveAddress(data)).unwrap();
        dispatch(push_Addres([address]));
        toast.success("address saved successfully");
        setData({ ...form });
        close(false);
      } else if (action === "EDIT" && id) {
        const edited = await dispatch(
          editAddress({ ...data ,_id: id })
        ).unwrap();
        dispatch(replace_OneAddres(edited));
        toast.success("address edited successfully");
      } else if (!id) {
        toast.error(`can not get id ${id}`);
      } else {
        toast.error(`${action} type not recognized`);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <div className="row w-100 justify-content-center">
      {/* <div > */}
      <div className="checkout-left-data">
        <form
          onSubmit={(e) => saveHandler(e)}
          className="d-flex gap-15 flex-wrap  justify-content-between "
        >
          <div className="w-100">
            <select
              name="country"
              value={data.country}
              onChange={(e) => formOnChangeHandler(e)}
              className="form-control form-select"
              id="country"
            >
              <option value="DEFAULT" disabled>
                Select Country
              </option>
              <option value="india">India</option>
            </select>
          </div>
          <div className="flex-grow-1">
            <input
              required
              value={data.first_name}
              onChange={(e) => formOnChangeHandler(e)}
              name="first_name"
              type="text"
              placeholder="First Name"
              className="form-control"
            />
          </div>
          <div className="flex-grow-1">
            <input
              required
              value={data.last_name}
              onChange={(e) => formOnChangeHandler(e)}
              name="last_name"
              type="text"
              placeholder="Last Name"
              className="form-control"
            />
          </div>
          <div className="w-100">
            <input
              required
              value={data.address}
              onChange={(e) => formOnChangeHandler(e)}
              name="address"
              type="text"
              placeholder="Address"
              className="form-control"
            />
          </div>
          <div className="w-100">
            <input
              value={data.apartment}
              onChange={(e) => formOnChangeHandler(e)}
              name="apartment"
              type="text"
              placeholder="Apartment, Suite ,etc"
              className="form-control"
            />
          </div>
          <div className="flex-grow-1">
            <input
              required
              value={data.city}
              onChange={(e) => formOnChangeHandler(e)}
              name="city"
              type="text"
              placeholder="City"
              className="form-control"
            />
          </div>
          <div className="flex-grow-1">
            <select
              value={data.state}
              onChange={(e) => formOnChangeHandler(e)}
              name="state"
              className="form-control form-select"
              id=""
            >
              <option value="DEFAULT" disabled>
                Select State
              </option>
              <option value="madhaya pradesh">Madhaya pradesh</option>
            </select>
          </div>
          <div className="flex-grow-1">
            <input
              required
              value={data.zipcode}
              onChange={(e) => formOnChangeHandler(e)}
              name="zipcode"
              type="text"
              placeholder="Zipcode"
              className="form-control"
            />
          </div>

          <div className="flex-grow-1">
            <input
              required
              value={data.phone_no}
              onChange={(e) => formOnChangeHandler(e)}
              name="phone_no"
              type="text"
              placeholder="Phone no."
              className="form-control"
            />
          </div>
          <div className="d-flex justify-content-between w-100 gap-2 py-2">
            <button
              type="button"
              className="px-2 py-1 rounded-3"
              onClick={() => close(false)}
            >
              Close
            </button>
            <button type="submit" className="px-2 py-1 rounded-3">
              Save
            </button>
          </div>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Address_form;
