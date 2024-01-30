import React from "react";

const Sort_Products: React.FC<{
  setGrid: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setGrid }) => {
  return (
    <div className="d-flex flex-wrap gap-10 justify-content-between  align-items-center">
      <div className="col-12 col-lg-5 d-flex align-items-center gap-10">
        <p className="mb-0 d-block" style={{ width: "100px" }}>
          Sort By:
        </p>
        <select
          name=""
          defaultValue={"manual"}
          className="form-control form-select "
          id=""
        >
          {[
            "manual",
            "best-selling",
            "title-ascending",
            "title-decending",
            "price-ascending",
            "price-decending",
          ].map((item, i) => {
            return (
              <option value="manual" key={i}>
                {item}{" "}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-12 col-lg-5 d-flex align-items-center align gap-10">
        <p className="totalproducts mb-0 ">21 Products</p>
        <div className="d-flex gap-10 align-items-center grid">
          {[
            {
              icon: "/images/gr4.svg",
              val: 3,
              class: "d-block  d-none d-lg-block",
            },
            {
              icon: "/images/gr3.svg",
              val: 4,
              class: "d-block d-none d-md-block",
            },
            { icon: "/images/gr2.svg", val: 6, class: "d-block" },
            { icon: "/images/gr.svg", val: 12, class: "d-block" },
          ].map((item, i) => {
            return (
              <img
                key={i}
                onClick={() => setGrid(item.val)}
                src={`${item.icon}`}
                className={`img-fluid ${item.class}`}
                alt="grid"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sort_Products;
