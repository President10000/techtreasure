import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowUpSFill } from "react-icons/ri";
const Filter = () => {
  const [FilterBy, setFilterBy] = useState(window.innerWidth > 1000);
  const [availiblity, setAvailiblity] = useState(window.innerWidth > 1000);
  const [tags, setTags] = useState(window.innerWidth > 1000);

  useEffect(() => {
    function resize() {
      setFilterBy(window.innerWidth > 1000);
      setAvailiblity(window.innerWidth > 1000);
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
            {FilterBy ? <RiArrowUpSFill /> : <IoMdArrowDropdown />}
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
                onClick={() => setAvailiblity(!availiblity)}
              >
                <h3 className=" fs-6">Availablity</h3>
                <span className="px-2 py-0">
                  {availiblity ? <RiArrowUpSFill /> : <IoMdArrowDropdown />}
                </span>
              </button>
              {availiblity && (
                <div className="col-12 d-flex align-item-center justify-content-start gap-2">
                  <div className="form-check " style={{ paddingLeft: "0px" }}>
                    <label
                      className="form-check-label m-1"
                      style={{ fontSize: "12px" }}
                      htmlFor=""
                    >
                      In Stock (1)
                    </label>
                    <input className="m-1" type="checkbox" value="" id="" />
                  </div>
                  <div className="form-check " style={{ paddingLeft: "0px" }}>
                    <label
                      className="form-check-label m-1"
                      style={{ fontSize: "12px" }}
                      htmlFor=""
                    >
                      Out of Stock (0)
                    </label>
                    <input className="m-1" type="checkbox" value="" id="" />
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
                    type="email"
                    className="form-control "
                    id="floatingInput"
                    placeholder="From"
                  />
                  <label htmlFor="floatingInput">From</label>
                </div>
                <div className="form-floating ">
                  <input
                    type="email"
                    className="form-control  "
                    id="floatingInput1"
                    placeholder="To"
                  />
                  <label htmlFor="floatingInput1">To</label>
                </div>
              </div>
            </div>
            {/* colors */}
            <div className="col-12 d-flex ">
              <div>
                <h5 className="sub-title fs-6">Colors</h5>
              </div>
              <div className="d-flex flex-wrap align-items-center ">
                {/* <div> */}
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
                {/* </div> */}
              </div>
            </div>
            {/* size */}
            <div className="col-12 d-flex flex-wrap align-items-center justify-content-start gap-2">
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
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="filter-card ">
        <button
          className="d-flex  align-item-center justify-content-start gap-2 px-2 w-100"
          onClick={() => setTags(!tags)}
        >
          <h3 className="filter-title fs-6">Products Tags</h3>
          <span className="px-2 py-0">
            {tags ? <RiArrowUpSFill /> : <IoMdArrowDropdown />}
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
      </div>
    </>
  );
};

export default Filter;
