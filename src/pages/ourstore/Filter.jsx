import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowUpSFill } from "react-icons/ri";
const Filter = () => {
  const [FilterBy, setFilterBy] = useState(window.innerWidth > 1000);
  const [show_availiblity, setShow_availiblity] = useState(
    window.innerWidth > 1000
  );
  const [tags, setTags] = useState(window.innerWidth > 1000);

  const [price_fromTo, setPrice_fromTo] = useState({ from: 0, to: Infinity });
  const [availablity, setAvailiblity] = useState({
    in_stock: true,
    out_of_stock: false,
  });
  function price_fromToChangeHandler(e) {
    const val = parseInt(e.target.value);
    const name = e.target.name;
    if (!isNaN(val) && typeof val === "number") {
      if (name === "from") {
        setPrice_fromTo((pre) => ({ ...pre, from: val }));
      } else if (name === "to") {
        setPrice_fromTo((pre) => ({ ...pre, to: val }));
      }
    }
  }

  useEffect(() => {
    function resize() {
      setFilterBy(window.innerWidth > 1000);
      setShow_availiblity(window.innerWidth > 1000);
      setTags(window.innerWidth > 1000);
    }
    addEventListener("resize", resize);
    return () => {
      removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="filter-card ">
        <button
          className="d-flex  align-item-center justify-content-start gap-2 px-2 w-100"
          onClick={() => setFilterBy(!FilterBy)}
        >
          <h3 className="filter-title">Filter By </h3>
          <span className="px-2 py-0">
            {FilterBy ? <IoMdArrowDropdown /> : <RiArrowUpSFill />}
          </span>
        </button>
        {FilterBy ? (
          <div className="d-flex flex-wrap flex-lg-colunm gap-2">
            {/* availablity */}
            <div
              style={{ flexDirection: "column" }}
              className="d-flex flex-colunm col-12 "
            >
              <button
                className="d-flex  align-item-center justify-content-start gap-2 px-2 mt-2 "
                style={{ width: "fit-content" }}
                onClick={() => setShow_availiblity(!show_availiblity)}
              >
                <h3 className=" fs-6">Availablity</h3>
                <span className="px-2 py-0">
                  {show_availiblity ? (
                    <IoMdArrowDropdown />
                  ) : (
                    <RiArrowUpSFill />
                  )}
                </span>
              </button>
              {show_availiblity && (
                <div className="col-12 d-flex align-item-center justify-content-start gap-2">
                  <div className="form-check " style={{ paddingLeft: "0px" }}>
                    <label
                      className="form-check-label m-1"
                      style={{ fontSize: "12px" }}
                      htmlFor=""
                    >
                      In Stock (1)
                    </label>
                    <input
                      onChange={() =>
                        setAvailiblity((pre) => ({
                          ...pre,
                          in_stock: !pre.in_stock,
                        }))
                      }
                      checked={availablity.in_stock}
                      className="m-1"
                      type="checkbox"
                      value=""
                      id=""
                    />
                  </div>
                  <div className="form-check " style={{ paddingLeft: "0px" }}>
                    <label
                      className="form-check-label m-1"
                      style={{ fontSize: "12px" }}
                      htmlFor=""
                    >
                      Out of Stock (0)
                    </label>
                    <input
                      onChange={() =>
                        setAvailiblity((pre) => ({
                          ...pre,
                          out_of_stock: !pre.out_of_stock,
                        }))
                      }
                      checked={availablity.out_of_stock}
                      className="m-1"
                      type="checkbox"
                      value=""
                      id=""
                    />
                  </div>
                </div>
              )}
            </div>
            {/* price */}
            <div className="d-flex col-12 align-items-center  gap-10 ">
              <div>
                <h5 className="sub-title fs-6">Price</h5>
              </div>
              <div className="d-flex gap-2">
                <div className="form-floating ">
                  <input
                    value={price_fromTo.from}
                    onChange={(e) => price_fromToChangeHandler(e)}
                    type="number"
                    name="from"
                    className="form-control "
                    id="floatingInput"
                    placeholder="From"
                  />
                  <label htmlFor="floatingInput">From</label>
                </div>
                <div className="form-floating ">
                  <input
                    value={price_fromTo.to}
                    onChange={(e) => price_fromToChangeHandler(e)}
                    type="number"
                    name="to"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="To"
                  />
                  <label htmlFor="floatingInput1">To</label>
                </div>
              </div>
            </div>
            {/* colors */}
            {/* <div className="col-12 d-flex ">
              <div>
                <h5 className="sub-title fs-6">Colors</h5>
              </div>
              <div className="d-flex flex-wrap align-items-center ">
                <ul className="colors mb-0">
                  {["red", "blue", "green", "black"].map((color, i) => {
                    return (
                      <button
                        style={{ backgroundColor: `${color}` }}
                        key={i}
                      ></button>
                    );
                  })}
                </ul>
              </div>
            </div> */}
            {/* size */}
            {/* <div className="col-12 d-flex flex-wrap align-items-center justify-content-start gap-2">
              <div>
                <h5 className="sub-title fs-6">Size</h5>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-3">
                <div className="form-check d-flex align-items-center gap-2 ms-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="color1"
                  />
                  <label className="form-check-label" htmlFor="color1">
                    S (2)
                  </label>
                </div>
                <div className="form-check d-flex align-items-center gap-2 ms-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="color2"
                  />
                  <label className="form-check-label" htmlFor="color2">
                    M (2)
                  </label>
                </div>
              </div>
            </div> */}
          </div>
        ) : (
          ""
        )}
      </div>

      {/* <div className="filter-card ">
        <button
          className="d-flex  align-item-center justify-content-start gap-2 px-2 w-100"
          onClick={() => setTags(!tags)}
        >
          <h3 className="filter-title fs-6">Products Tags</h3>
          <span className="px-2 py-0">
            {tags ?  <IoMdArrowDropdown />: <RiArrowUpSFill />}
          </span>
        </button>
        {tags && (
          <div className="product-tags d-flex flex-wrap align-content-center gap-10">
            {["Headphone", "Laptop", "Mobile", "wireless", "Camera"].map(
              (item, i) => {
                return (
                  <span
                    key={i}
                    className="badge bg-light text-secondary  rounded-3 py-2 px-3  "
                  >
                    {item}
                  </span>
                );
              }
            )}
          </div>
        )}
      </div> */}
    </>
  );
};

export default Filter;
