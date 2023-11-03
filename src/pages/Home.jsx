import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import services from "../utils/Data";

const Home = () => {
  return (
    <>
      {/* first section */}
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative  ">
              <img
                src="/images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute ">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5 className="">iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button"> Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center ">
              {/* first img */}
              <div className="small-banner position-relative ">
                <img
                  src="/images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute ">
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    From $1699.00 <br /> or $64.62/mo.
                  </p>
                  {/* <Link className="button"> Buy Now</Link> */}
                </div>
              </div>
              {/* second img */}
              <div className="small-banner position-relative ">
                <img
                  src="/images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute ">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $599 <br /> or $49.91/mo.
                  </p>
                  {/* <Link className="button"> Buy Now</Link> */}
                </div>
              </div>
              {/* third img */}
              <div className="small-banner position-relative ">
                <img
                  src="/images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute ">
                  <h4>15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                  {/* <Link className="button"> Buy Now</Link> */}
                </div>
              </div>
              {/* fourth img */}
              <div className="small-banner position-relative ">
                <img
                  src="/images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute ">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                  {/* <Link className="button"> Buy Now</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* second section */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((service, index) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={index}>
                    <img src={service.image} alt="services" />
                    <div>
                      <h6>{service.title}</h6>
                      <p className="mb-0"> {service.tagline}</p>
                    </div>
                  </div>
                );
              })}

              {/* first image */}

              {/* second image */}
            </div>
          </div>
        </div>
      </Container>

      {/* third section */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="categories d-flex flex-wrap  justify-content-between align-items-center">
            {/* first image */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
              </div>
              <img src="/images/camera.jpg" alt="" />
            </div>
            {/* second image */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Smart TV</h6>
                <p>10 Items</p>
              </div>
              <img src="/images/tv.jpg" alt="" />
            </div>
            {/* third image */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Smart Watches</h6>
                <p>10 Items</p>
              </div>
              <img src="/images/headphone.jpg" alt="" />
            </div>
            {/* fourth image */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Music & Gaming</h6>
                <p>10 Items</p>
              </div>
              <img src="/images/camera.jpg" alt="" />
            </div>
            {/* first image */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Cameras</h6>
                <p>10 Items</p>
              </div>
              <img src="/images/camera.jpg" alt="" />
            </div>
            {/* second image */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Smart TV</h6>
                <p>10 Items</p>
              </div>
              <img src="/images/tv.jpg" alt="" />
            </div>
            {/* third image */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Smart Watches</h6>
                <p>10 Items</p>
              </div>
              <img src="/images/headphone.jpg" alt="" />
            </div>
            {/* fourth image */}
            <div className="d-flex gap align-items-center">
              <div>
                <h6>Music & Gaming</h6>
                <p>10 Items</p>
              </div>
              <img src="/images/camera.jpg" alt="" />
            </div>
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
        <div className="row">
          <div className="col-3">
            <div className="famous-card  position-relative ">
              <img
                src="images/famous-1.jpg"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute ">
                <h5>BIG SCREEN</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399.00 or $16.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card  position-relative ">
              <img
                src="images/famous-2.jpg"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute ">
                <h5 className="text-dark">STUDIO DISPLAY</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5k Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card  position-relative ">
              <img
                src="images/famous-3.jpg"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute ">
                <h5 className="text-dark">SMART PHONES</h5>
                <h6 className="text-dark">Smartphone 13 Pro</h6>
                <p className="text-dark">
                  Now in Green From $900.00 or $41.62/mo. for 24 mo
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card  position-relative ">
              <img
                src="images/famous-6.jpg"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute ">
                <h5>Ipad air</h5>
                <h6>Full of might.</h6>
                <p>From $600.00</p>
              </div>
            </div>
          </div>
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
                <div className="mx-4 w-25">
                  {" "}
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  {" "}
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  {" "}
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  {" "}
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  {" "}
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  {" "}
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  {" "}
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  {" "}
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      {/* nine section */}
      <Container class1="blog-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
