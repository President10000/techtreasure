import Meta from "../../components/Meta";

import BreadCrumb from "../../components/BreadCrumb";
import Container from "../../components/Container";
import Custominput from "../../components/Custominput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/user/userSlice";
import "./signup.css";

const signUpSchema = yup.object({
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),

  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),
  mobile: yup.string().required("Mobile is required"),
  password: yup.string().required("Password is required"),
});

const Signup = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,

    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrumb title="Signup" />

      <Container class1="login-wraper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 d-flex align-item-center justify-content-center">
            <div className="auth-card col-12 col-md-8 col-lg-6">
              <h3 className="text-center mb-3 ">Create account</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <Custominput
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
                </div>

                <Custominput
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
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
                <Custominput
                  className="mt-1"
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
  );
};

export default Signup;
// import React from "react";
// import Meta from "../Components/Meta";
// import BreadCrumb from "../Components/BreadCrumb";
// import { Link } from "react-router-dom";
// import Container from "../Components/Container";
// import CustomInput from "../Components/CustomInput";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useDispatch } from "react-redux";
// import { registerUser } from "../features/user/userSlice";
// import { toast } from "react-toastify";

// const signUpSchema = yup.object({
//   firstname: yup.string().required("First Name is Required"),
//   lastname: yup.string().required("Last Name is Required"),
//   email: yup.string().email("Email Should be Valid").required("Email Required"),

//   mobile: yup.string().required("Mobile No is Required"),
//   password: yup.string().required("Password is Required"),
// });

// function SignUp() {
//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: {
//       firstname: "",
//       lastname: "",
//       email: "",
//       mobile: "",
//       password: "",
//     },
//     validationSchema: signUpSchema,
//     onSubmit: (values) => {
//       dispatch(registerUser(values));
//     },
//   });
//   return (
//     <>
//       {/* Tab heading */}
//       <Meta title={"Sign Up"} />
//       {/* Home / Sign Up*/}
//       <BreadCrumb title="Sign Up" />

//       <Container class1="login-wrapper py-5 home-wrapper-2 ">
//         <div className="row">
//           <div className="col-12">
//             <div className="auth-card">
//               <h3 className="text-center">Sign Up</h3>
//               <form
//                 action=""
//                 onSubmit={formik.handleSubmit}
//                 className="d-flex flex-column gap-1"
//               >
//                 <CustomInput
//                   type="text"
//                   name="firstname"
//                   placeholder="First Name"
//                   className="form-control"
//                   values={formik.values.firstname}
//                   onChange={formik.handleChange("firstname")}
//                   onBlur={formik.handleBlur("firstname")}
//                 />
//                 <div className="error ms-3">
//                   {formik.touched.firstname && formik.errors.firstname}
//                 </div>
//                 <CustomInput
//                   type="text"
//                   name="lastname"
//                   placeholder="Last Name"
//                   className="form-control"
//                   values={formik.values.lastname}
//                   onChange={formik.handleChange("lastname")}
//                   onBlur={formik.handleBlur("lastname")}
//                 />
//                 <div className="error ms-3">
//                   {formik.touched.lastname && formik.errors.lastname}
//                 </div>
//                 <CustomInput
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="form-control"
//                   values={formik.values.email}
//                   onChange={formik.handleChange("email")}
//                   onBlur={formik.handleBlur("email")}
//                 />
//                 <div className="error ms-3">
//                   {formik.touched.email && formik.errors.email}
//                 </div>
//                 <CustomInput
//                   type="tel"
//                   name="mobile"
//                   placeholder="Mobile Number"
//                   className="form-control"
//                   values={formik.values.mobile}
//                   onChange={formik.handleChange("mobile")}
//                   onBlur={formik.handleBlur("mobile")}
//                 />
//                 <div className="error ms-3">
//                   {formik.touched.mobile && formik.errors.mobile}
//                 </div>
//                 <CustomInput
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   className="form-control"
//                   values={formik.values.password}
//                   onChange={formik.handleChange("password")}
//                   onBlur={formik.handleBlur("password")}
//                 />
//                 <div className="error ms-3">
//                   {formik.touched.password && formik.errors.password}
//                 </div>

//                 <div>
//                   <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
//                     <button className="button border-0" type="submit">
//                       Sign Up
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }

// export default SignUp;
