import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Custominput from "../../components/Custominput";
import "./forgotpassword.css";
const Forgotpassword = () => {
  return (
    <>
      <Meta title={"ForgotPassword"} />
      <BreadCrumb title="ForgotPassword" />
      <Container class1="login-wraper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 d-flex  justify-content-center align-item-center">
            <div className="auth-card col-10 col-md-8 col-lg-6">
              <h3 className="text-center mb-3 ">Forgot Password</h3>
              <p className="text-center my-2 mb-3 ">
                we will send you a link to reset your password.
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <Custominput type="email" name="email" placeholder="Email" />

                <div>
                  <div className=" mt-3 d-flex justify-content-center flex-column  gap-15 align-items-center   ">
                    <button className="button border-0 " type="submit">
                      Submit
                    </button>

                    <Link to="/login" className="button signup">
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
