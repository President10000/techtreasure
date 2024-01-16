// import ReactStars from "react-rating-stars-component";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
// import Color from "../../components/Color";
import Container from "../../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/product/productSlice";
import { getProductsByCategory } from "../../features/productsByCategory/productByCategorySlice";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowUpSFill } from "react-icons/ri";
import "./ourstore.css";
const OurStore = () => {
  const query = new URLSearchParams(window.location.search);
  const category = query.get("category");
  const [grid, setGrid] = useState(
    window.innerWidth > 1000 ? 4 : window.innerWidth < 600 ? 12 : 6
  );

  // const [category, setCategory] = useState(window.innerWidth > 1000);
  const [FilterBy, setFilterBy] = useState(window.innerWidth > 1000);
  const [availiblity, setAvailiblity] = useState(window.innerWidth > 1000);
  const [tags, setTags] = useState(window.innerWidth > 1000);

  const productState = useSelector((state) => state.product.products);
  const refresh = useSelector((state) => state.productBycategory.refresh);
  const products = useSelector(
    (state) => state.productBycategory.products[`${category.toLowerCase()}`]
  );
  // console.log(productState);
  const dispatch = useDispatch();
  // console.log(category);
  useEffect(() => {

    // console.log(category);
    function getproducts() {
      if (category && !products) {
        dispatch(getProductsByCategory(category.toLowerCase()));
      } else {
        dispatch(getAllProducts());
      }
    }
    // console.log(products);
    getproducts();
  }, [dispatch, category, products, refresh]);
  
  useEffect(() => {
    function resize() {
      // setCategory(window.innerWidth > 1000);
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
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-3 ">
        <div className="row">
          <div className="mb-2 col-12 col-lg-3 d-flex flex-column align-item-center justify-content-start row-gap-2">
            
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
                        {availiblity ? (
                          <RiArrowUpSFill />
                        ) : (
                          <IoMdArrowDropdown />
                        )}
                      </span>
                    </button>
                    {availiblity && (
                      <div className="col-12 d-flex align-item-center justify-content-start gap-2">
                        <div
                          className="form-check "
                          style={{ paddingLeft: "0px" }}
                        >
                          <label
                            className="form-check-label m-1"
                            style={{ fontSize: "12px" }}
                            htmlFor=""
                          >
                            In Stock (1)
                          </label>
                          <input
                            className="m-1"
                            type="checkbox"
                            value=""
                            id=""
                          />
                        </div>
                        <div
                          className="form-check "
                          style={{ paddingLeft: "0px" }}
                        >
                          <label
                            className="form-check-label m-1"
                            style={{ fontSize: "12px" }}
                            htmlFor=""
                          >
                            Out of Stock (0)
                          </label>
                          <input
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

            {/* third div */}
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
              )}
            </div>
            {/* fourth div */}
          </div>
          <div className="col-12 col-lg-9">
            <div className="filter-sort-grid mb-4">
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
            </div>
            <div className="products-list pb-5 ">
              <div className="d-flex gap-1 flex-wrap justify-content-center">
                {category ? (
                  <ProductCard
                    grid={grid}
                    productdata={products ? products : []}
                    // productdata={ []}
                  />
                ) : (
                  <ProductCard
                    grid={grid}
                    productdata={productState ? productState : []}
                  />
                )}
              </div>
            </div>
          </div>
          {/* <div className="filter-card mb-3">
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
            </div> */}
        </div>
      </Container>
    </>
  );
};

export default OurStore;
