import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

import Container from "../components/Container";
import Custominput from "../components/Custominput";
const Signup = () => {
  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrumb title="Signup" />
      <Container class1="login-wraper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3 ">Create account</h3>
              <form action="" className="d-flex flex-column gap-15">
                <Custominput type="text" name="name" placeholder="Name" />
                <Custominput type="text" name="name" placeholder="Lastname" />
                <Custominput type="email" name="email" placeholder="Email" />
                <Custominput
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                />
                <Custominput
                  className="mt-1"
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center   ">
                    <button className="button border-0  " type="submit">
                      Login
                    </button>
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

export default Signup;
