import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import Container from "../../components/Container";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5160.2007937684!2d78.80393948856953!3d23.86077147363819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1696471541395!5m2!1sen!2sin"
              width="600"
              height="450"
              className="border-0 w-100 "
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5 ">
            <div className=" d-flex flex-wrap gap-10 justify-content-between">
              <div className="col-12 col-md-5">
                <h3 className="contact-title mb-4 ">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="w-100 form-control"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0 ">Submit</button>{" "}
                  </div>
                </form>
              </div>
              <div className="col-12 col-md-5">
                <h3 className="contact-title mb-4 ">Get in touch with Us</h3>
                <div className="detail-wrapper ">
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center   ">
                      <IoHomeOutline className="fs-5" />
                      <address className="mb-0">
                        Hno:792 deen dayal nagar near raghu hostal
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center  ">
                      <BiPhoneCall className="fs-5" />
                      <a href="tel: +91 700008585">+91 700008585</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center  ">
                      <AiOutlineMail className="fs-5" />
                      <a href="mailto:vihankushwaha@mail.com">
                        vihankushwaha@mail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center  ">
                      <BsInfoCircle className="fs-5" />
                      <p className="mb-0">Monday - Friday 10 AM - 8PM </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;

// responsive complete code
