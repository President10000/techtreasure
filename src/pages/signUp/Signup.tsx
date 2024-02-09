import Meta from "../../components/Meta";

import BreadCrumb from "../../components/BreadCrumb";
import Container from "../../components/Container";
import Custominput from "../../components/Custominput";
import { useFormik } from "formik";
import * as yup from "yup";
import { registerUser } from "../../features/auth/userSlice";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toast } from "react-toastify";
const signUpSchema = yup.object({
  // firstname: yup
  //   .string()
  //   .required("Firstname is required")
  //   .min(3, "Too Short!")
  //   .max(20, "Too Long!"),
  // lastname: yup
  //   .string()
  //   .required("Lastname is required")
  //   .min(3, "Too Short!")
  //   .max(20, "Too Long!"),

  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),
  mobile: yup.string().min(10, "Not valid!").max(10, "Not valid!"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Too Short!")
    .max(100, "Too Long!"),
});
const Signup = () => {
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      // firstname: "",
      // lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,

    onSubmit: async (values) => {
     try {
      await dispatch(registerUser(values));
      navigate("/profile");
     } catch (error) {
      console.error(error)
      toast.error("try again later")
     }
    },
  });

  useEffect(() => {
    if (user) navigate("/profile");
  }, [user]);

  return (
    <>
      {!user ? (
        <>
          <Meta title={"Signup"} />
          <BreadCrumb title="Signup" />

          <Container className="login-wraper home-wrapper-2 py-5">
            <div className="row">
              <div className="col-12 d-flex align-item-center justify-content-center">
                <div className="auth-card col-12 col-md-8 col-lg-6">
                  <p className="already ">
                    Already have an account
                    <Link to="/login" className="px-2 text-blue">
                      login
                    </Link>
                  </p>
                  <h3 className="text-center mb-3 ">Create account</h3>
                  <form
                    action=""
                    onSubmit={formik.handleSubmit}
                    className="d-flex flex-column gap-15"
                  >
                    {/* <Custominput
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      value={formik.values.firstname}
                      onChange={formik.handleChange("firstname")}
                      onBlur={formik.handleBlur("firstname")}
                    />
                    <div className="error">
                      {formik.touched.firstname && formik.errors.firstname}
                    </div>
                    <Custominput
                      type="text"
                      name="lastname"
                      placeholder="Lastname"
                      value={formik.values.lastname}
                      onChange={formik.handleChange("lastname")}
                      onBlur={formik.handleBlur("lastname")}
                    />

                    <div className="error">
                      {formik.touched.lastname && formik.errors.lastname}
                    </div> */}

                    <Custominput
                      required
                      classname=""
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                    <Custominput
                      classname=""
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number : Optional"
                      value={formik.values.mobile}
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                    />
                    <div className="error">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                    <Custominput
                      required
                      classname="mt-1"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange("password")}
                      onBlur={formik.handleBlur("password")}
                    />
                    <div className="error">
                      {formik.touched.password && formik.errors.password}
                    </div>

                    <div>
                      <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center   ">
                        <button className="button border-0  " type="submit">
                          Signup
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </>
      ) : null}
    </>
  );
};

export default Signup;
