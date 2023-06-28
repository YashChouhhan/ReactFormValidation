import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, actions) => {
      const storedData = JSON.parse(localStorage.getItem("userData")) || [];
      const matchingUser = storedData.find((user) => user.email === values.email && user.password === values.password);
      console.log(matchingUser)
      if (matchingUser) {
        localStorage.setItem("loggedIn",matchingUser.email);
        alert("Login successful");
        navigate('/');
      } else {
        alert("Login failed");
      }
      actions.resetForm();
    },
  });

  
  return (
    <div className="container mt-5">
      <div className="Login">
        <h1 className="mb-4">login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
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
