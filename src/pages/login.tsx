import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { login } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();

  // Form validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Initial values for Formik
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values : any) => {
    try {
      const response = await login(values);

      const { token, role } = response.data;

      // Store token and role in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>

              {/* Formik Form */}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({  }) => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="form-group mt-3">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-danger mt-3"
                    >
                     Login
                    </button>
                  </Form>
                )}
              </Formik>

              <p className="mt-3">
                Not registered? <Link to="/sign-up">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
