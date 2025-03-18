import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { signUp } from "../services/authService";


const SignUp = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values: any) => {
      try {
        const data = await signUp({...values, role : 1})
        console.log('data', data);
        toast.success("Success message")
        navigate('/login');
    } catch (err) {
      console.log('error', err);
    }
    // Handle form submission logic here
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="email">Name</label>
                      <Field
                        type="name"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-danger"
                      disabled={isSubmitting}
                    >
                      Sign Up
                    </button>
                  </Form>
                )}
              </Formik>
              <p className="mt-3">
                Not registered?{" "}
                <Link to="/sign-up">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;