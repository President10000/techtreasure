import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./header.css";
import logo from "../../images/Rai_appliancs-removebg-preview.png";
import { FaGripLinesVertical } from "react-icons/fa";
const Header = () => {
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
      path: "login",
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
    { nav: "", title: "Home" },
    { nav: "product", title: "OurStore" },
    // { nav: "blogs", title: "blogs" },
    // { nav: "contact", title: "contacts" },
  ];

  function pushIcon(miniNav) {
    return miniNav.reduce((initial, nav, i, miniNavArr) => {
      initial.push({ ...nav, type: "link" });
      if (i != miniNavArr.length - 1) {
        initial.push({ type: "icon" });
      }
      return initial;
    }, []);
  }

  return (
    <>
      {/* first header */}
      <header className="header-top-strip d-none d-xxl-block py-3 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free shipping on orders over $100 & free returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Helpline:{" "}
                <a className="text-white" href="tel:+91 700008555">
                  +91 700008555
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* second header */}
      <header className="header-upper py-1 py-lg-2  ">
        <div className="container-xxl">
          <div className="row align-items-center d-flex flex-grow-1">
            <div className="col-lg-6  col-md-12 col-12 mt-sm-3 mb-lg-3 align-items-center d-flex justify-content-center">
              <div className="name-div col-md-2 col-2 d-none d-md-block align-items-center d-flex justify-content-center">
                <h2 className="align-items-center d-flex justify-content-center mb-0">
                  <Link to="/" className="text-green ">
                    <img
                      src={logo}
                      style={{ width: "35px", height: "35px" }}
                      alt="logo"
                    />
                  </Link>
                  {/* <Link className="text-green d-block d-md-none">LOGO</Link> */}
                </h2>
              </div>
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
                  className="d-flex align-items-center justify-content-evenly"
                  style={{ paddingLeft: "0px", marginBottom: "0px" }}
                >
                  {navBar.map((item, i) => {
                    const { path, img, title, badge, value } = item;
                    return (
                      <li key={i} style={{ listStyle: "none" }}>
                        <Link
                          to={`${path}`}
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

      <header className="header-bottom py-1 py-md-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center justify-content-center ">
                <ul
                  className="d-flex align-items-center justify-content-center gap-15"
                  style={{ paddingLeft: "0px", marginBottom: "0px" }}
                >
                  {pushIcon(miniNav).map((item, i) => {
                    const { title, nav, type } = item;
                    if (type == "icon") {
                      return (
                        <li
                          key={i}
                          style={{ listStyle: "none" }}
                          className="text-white d-flex align-items-center justify-content-center"
                        >
                          <FaGripLinesVertical />
                        </li>
                      );
                    }
                    return (
                      <li key={i} style={{ listStyle: "none" }}>
                        <NavLink
                          className="text-white text-uppercase"
                          to={`/${nav}`}
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
