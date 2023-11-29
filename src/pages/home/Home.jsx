import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "./home.css";
import "./famouscard.css";

import BlogCard from "../../components/blogCard/BlogCard";
import ProductCard from "../../components/productCard/ProductCard";
import SpecialProduct from "../../components/specialProduct/SpecialProduct";
import Container from "../../components/Container";
import services, {
  Items_1,
  Our_cunsumers,
  SCREEN_banners,
  homeProductApi,
} from "../../utils/Data";

// import mainbanner from "../../images/main-banner-02.jpg";

const Home = () => {
  return (
    <>
      {/* first section */}
      <Container class1="home-wrapper-1 py-3 ">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="main-banner position-relative  ">
              <img
                src="/images/main-banner-1.jpg"
                className="col-12 rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button"> Buy Now</Link>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="main-banner position-relative  ">
              <img
                src={mainbanner}
                className="col-12 rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button"> Buy Now</Link>
              </div>
            </div>
          </div> */}
          <div className="  col-xxl-6 col-lg-6  co-md-12 col-sm-12 col-12 col-12 mt-3 mt-lg-0 ">
            <ul
              style={{
                marginBottom: "0px",
                paddingLeft: "0px",
                marginTop: "1.5vw",
              }}
              className="d-flex mt-xxl-0 flex-wrap gap-10 justify-content-around align-items-center"
            >
              {homeProductApi.map((item, i) => {
                const { img, title, subTitle, price } = item;
                return (
                  <li
                    key={i}
                    className="col-12 col-md-5 position-relative"
                    style={{
                      listStyle: "none",
                      marginBottom: "2vw",
                    }}
                  >
                    <img
                      src={`${img}`}
                      className="col-12  rounded-3"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute ">
                      <h4>{title}</h4>
                      <h5>{subTitle}</h5>
                      <p>{price}</p>
                    </div>
                  </li>
                );
              })}
              {homeProductApi.length % 2 !== 0 ? (
                <li
                  className="col-12 col-md-5 "
                  style={{
                    listStyle: "none",
                  }}
                ></li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </Container>

      {/* second section */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services gap-15 d-flex flex-wrap  align-items-center justify-content-around">
              {services?.map((service, index) => {
                return (
                  <div
                    className="col-5 d-flex align-items-center justify-content-center gap-15"
                    key={index}
                  >
                    <img src={service.image} alt="services" />
                    <div>
                      <h6>{service.title}</h6>
                      <p className="mb-0"> {service.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* third section */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="categories d-flex flex-wrap  justify-content-between align-items-center">
            {Items_1.map((item, i) => {
              const { title, qty, img } = item;
              return (
                <div
                  key={i}
                  className="m-1 col-12 col-md-5 col-lg-3 d-flex gap align-items-center justify-content-around"
                >
                  <div>
                    <h6>{title}</h6>
                    <p>{qty}</p>
                  </div>
                  <img src={`${img}`} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* fourth section */}
      <Container class1="featured-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Fetured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      {/* fifth section */}
      <Container class1="famous-wrapper py-5  home-wrapper-2">
        <div className="row justify-content-evenly">
          {SCREEN_banners.map((item, i) => {
            const { img, title, subTitle, price } = item;
            return (
              <div
                key={i}
                className="rounded-3 col-11 col-md-6 p-2 col-lg-3 overflow-hidden"
              >
                <div className="famous-card  position-relative d-flex justify-content-center">
                  <img src={`${img}`} width={"100%"} alt="famous" />
                  <div className="famous-content position-absolute ">
                    <h5>{title}</h5>
                    <h6>{subTitle}</h6>
                    <p>{price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* sixth seciton */}
      <Container class1=" special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row ">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      {/* seven section */}
      <Container class1="popular-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      {/* eight section */}
      <Container class1="marque-wrapper py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex ">
                {Our_cunsumers.map((con, i) => {
                  return (
                    <div key={i} className="mx-4 w-25 ">
                      {" "}
                      <img src={`${con.img}`} alt="brand" />
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      {/* nine section */}
      {/* <Container class1="blog-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {[{}, {}, {}, {}].map((item, i) => {
            return (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <BlogCard />
              </div>
            );
          })}
        </div>
      </Container> */}
    </>
  );
};

export default Home;

// responsive complete
