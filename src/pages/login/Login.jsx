import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Custominput from "../../components/Custominput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";
import "./login.css";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),

  password: yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,

    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wraper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 d-flex  justify-content-center align-item-center">
            <div className="auth-card col-10 col-md-8 col-lg-6 ">
              <h3 className="text-center mb-3 ">Login</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <Custominput
                  type="email"
                  name="email"
                  placeholder="Email"
                  values={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <Custominput
                  type="password"
                  name="password"
                  placeholder="Password"
                  values={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <Link to="/forgot-password">Forgot Password ?</Link>
                  <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center   ">
                    <button className="button border-0 " type="submit">
                      Login
                    </button>
                    <span>or</span>

                    <Link to="/signup" className=" button signup">
                      Signup
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

export default Login;
