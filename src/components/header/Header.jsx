import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./header.css";
// import logo from "../../images/Rai_appliancs-removebg-preview.png";
import { FaGripLinesVertical } from "react-icons/fa";
import { Logo } from "../../utils/logo_import";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setRefresh } from "../../features/productsByCategory/productByCategorySlice";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  function onRefresh() {
    dispatch(setRefresh());
  }

  const navBar = [
    // {
    //   path: "compare-product",
    //   img: "/images/compare.svg",
    //   title: "Compare Products",
    // },
    {
      path: "wishlist",
      img: "/images/wishlist.svg",
      title: "Wishlist",
    },
    {
      path: "profile",
      img: "/images/user.svg",
      title: "My Account",
    },
    {
      path: "cart",
      img: "/images/cart.svg",
      title: "$500",
      badge: "badge bg-white text-dark",
      value: "0",
    },
  ];
  const miniNav = [
    // { nav: "", title: "Home" },
    { nav: "product", title: "mobiles" },
    { title: "Syringe", nav: "OurStore" },
    { title: "Ortho", nav: "OurStore" },
    { title: "Pathology machine", nav: "OurStore" },
    { title: "Pratient monitor", nav: "OurStore" },
    { title: "Cartical care", nav: "OurStore" },
    { title: "Baby", nav: "OurStore" },
    { title: "Dental care", nav: "OurStore" },
    { title: "Gauze product", nav: "OurStore" },
  ];



  return (
    <>

      {/* second header */}
      <header className="header-upper py-1   ">
        <div className="container-xxl">
          <div className="row align-items-center d-flex flex-grow-1">
            <div className="col-lg-6  col-md-12 col-12  align-items-center d-flex justify-content-center">
              {/* <div className="name-div col-md-2 col-2 d-none d-md-block align-items-center d-flex justify-content-center">
                <h2 className="align-items-center d-flex justify-content-center mb-0">
                  
                </h2>
              </div> */}
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search product here..."
                  aria-label="Search product here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3 " id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-12  col-lg-6 py-2 py-md-2 ">
              {
                <ul
                  className="w-100 d-flex align-items-center justify-content-evenly"
                  style={{ paddingLeft: "0px", marginBottom: "0px" }}
                >
                    <li style={{ listStyle: "none" }} className="d-flex badge-cart-head  align-items-center gap-10 text-white">
                  <Link to="/" className="text-green icon ">
                    <img src={Logo} alt="logo" />
                  </Link>
                  <p className="mb-0 d-none d-sm-block">{"HOME"}</p>
                  </li>
                  {navBar.map((item, i) => {
                    const { path, img, title, badge, value } = item;
                    return (
                      <li key={i} style={{ listStyle: "none" }}>
                        <Link
                          to={
                            path == "profile"
                              ? user
                                ? `/${path}`
                                : `/login`
                              : `/${path}`
                          }
                          className="d-flex badge-cart-head  align-items-center gap-10 text-white "
                        >
                          <img className="icon" src={`${img}`} alt="compare" />
                          <span className={`${badge} m-1  badge-cart`}>
                            {value}
                          </span>
                          <p className="mb-0 d-none d-sm-block">{title}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              }
            </div>
          </div>
        </div>
      </header>

      {/* third header */}

      <header className="header-bottom py-1 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center justify-content-center ">
                <ul
                  className="category_list overflow-hidden d-flex align-items-center  justify-content-center flex-wrap gap-10"
                  style={{ paddingLeft: "0px", marginBottom: "0px" }}
                >
                
                  {miniNav.map((item, i) => {
                    const { title, nav} = item;
                    return (
                      <li
                        className="categoey_font border border-2 border-black rounded-2 px-2 py-1"
                        key={i}
                        style={{
                          listStyle: "none",
                        }}
                      >
                        <NavLink
                          onClick={() => onRefresh()}
                          className="navlink text-white text-uppercase"
                          to={`/product?category=${title}`}
                        >
                          {title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
