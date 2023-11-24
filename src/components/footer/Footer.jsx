import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../../images/newsletter.png";
import "./footer.css";
const Footer = () => {
  return (
    <>
      {/* first part */}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row  flex-wrap align-items-center justify-content-center ">
            <div className="col-12 col-lg-6 py-2 d-flex align-items-center justify-content-center">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h3 className="fs-4 fs-md-2 text-white mb-0">
                  Sign up for Newsletter{" "}
                </h3>
              </div>
            </div>
            <div className="col-12 col-lg-6 py-2">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2 " id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* responsive  */}
      {/* second part */}
      <footer className="py-4">
        <div className="container-xxl ">
          <div className="row flex-wrap">
            <div className="col-6 col-lg-3">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno: 324 Near Raghu Hostal, Makroniya, Sagar <br />
                  PinCode: 470004
                </address>
                <a
                  href="tel:+91 7000085555"
                  className="mt-3 d-block mb-1 text-white "
                >
                  +91 7000085555
                </a>
                <a
                  href="mailto: vihankushwahaa@gmail.com"
                  className="mt-2 d-flex flex-column flex-md-row mb-0 text-white "
                >
                  <span>vihankushwahaa@</span>
                  <span>gmail.com</span>
                </a>
                <div className="social_icons d-flex align-items-center flex-wrap mt-4 ">
                  <a href="">
                    <BsLinkedin className="text-white fs-4" />
                  </a>
                  <a href="">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a href="">
                    <BsGithub className="text-white fs-4" />
                  </a>
                  <a href="">
                    <BsYoutube className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/termandConditions" className="text-white py-2 mb-1">
                  Term & Conditions{" "}
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* third part */}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                {" "}
                &copy; {new Date().getFullYear()} Powered by President10000{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// responsive complete
