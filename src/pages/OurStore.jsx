import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-3">
            {/* first div */}
            <div className="filter-card mb-3 ">
              <h3 className="filter-title">Shop By Category</h3>
              <div>
                <ul className="ps-0">
                  <li>Price</li>
                  <li>Brand</li>
                  <li>Color</li>
                  <li>Size</li>
                </ul>
              </div>
            </div>
            {/* second div */}
            <div className="filter-card mb-3 ">
              <h3 className="filter-title">Filter By </h3>
              <div>
                {/* availablity */}
                <h5 className="sub-title">Availablity</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of Stock (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                {/* price */}
                <div className="d-flex align-items-center  gap-10 ">
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
                {/* colors */}
                <h5 className="sub-title">Colors</h5>
                <div>
                  <div className="d-flex flex-wrap ">
                    <div>
                      <Color />
                    </div>
                  </div>
                </div>
                {/* size */}
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
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
                  <div className="form-check">
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

            {/* third div */}
            <div className="filter-card mb-3">
              <h3 className="filter-title">Products Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-content-center gap-10">
                  <span className="badge bg-light text-secondary  rounded-3 py-2 px-3  ">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary  rounded-3 py-2 px-3  ">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary  rounded-3 py-2 px-3  ">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary  rounded-3 py-2 px-3  ">
                    wireless
                  </span>
                  <span className="badge bg-light text-secondary  rounded-3 py-2 px-3  ">
                    Camera
                  </span>
                </div>
              </div>
            </div>
            {/* fourth div */}
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products mb-3 d-flex ">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      edit={false}
                      value={3}
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <b> $100</b>
                  </div>
                </div>
                <div className="random-products d-flex ">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      edit={false}
                      value={3}
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <b> $100</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between  align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"manual"}
                    className="form-control form-select "
                    id=""
                  >
                    <option value="manual">Featured </option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-decending">Alphabetically, Z-A</option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-decending">Price, high to low</option>
                    <option value="price-ascending">Date, old to new</option>
                    <option value="price-decending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center align gap-10">
                  <p className="totalproducts mb-0 ">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => setGrid(3)}
                      src="/images/gr4.svg"
                      className="d-block img-fluid "
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(4)}
                      src="/images/gr3.svg"
                      className="d-block img-fluid "
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(6)}
                      src="/images/gr2.svg"
                      className="d-block img-fluid "
                      alt="grid"
                    />

                    <img
                      onClick={() => setGrid(12)}
                      src="/images/gr.svg"
                      className="d-block img-fluid "
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5 ">
              <div className="d-flex gap-10 flex-wrap ">
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
