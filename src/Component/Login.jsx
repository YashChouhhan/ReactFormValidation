import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      const storedData = JSON.parse(localStorage.getItem("userData")) || [];
      const matchingUser = storedData.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      if (matchingUser) {
        alert("Login successful");
      } else {
        alert("Login failed");
      }
      actions.resetForm();
    },
  });

  return (
    <div className="container">
      <div className="Login">
        <h1 className="mb-4">This is login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Enter Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <Link to="/signup" className="btn btn-link">SignUp Now</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;