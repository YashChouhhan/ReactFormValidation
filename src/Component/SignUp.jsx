import { useFormik } from "formik";
import * as yup from "yup";

const Validation = yup.object({
  name: yup.string().min(2).max(25).required("Please enter your name"),
  email: yup.string().email().required("Please enter your email"),
  number: yup.number().min(10).required("Please enter a number"),
  password: yup.string().min(6).required("Please enter your password"),
  con_password: yup
    .string()
    .required("Please enter confirm password")
    .oneOf(
      [yup.ref("password"), null],
      "Password and Confirm Password should match"
    ),
});
const initialValues = {
  name: "",
  email: "",
  number: "",
  password: "",
  con_password: "",
};
const SignUp = () => {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: Validation,
    onSubmit: (values, actions) => {
      const data = JSON.parse(localStorage.getItem("userData")) || [];
      console.log("use data", values)
      // Check email
      const existingUser = data.find((user) => user.email === values.email);
      if (existingUser) {
        alert("Email already exists");
        return;
      }

      data.push(values);
      localStorage.setItem("userData", JSON.stringify(data));
      actions.resetForm();
    },
  });
  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="mb-3">
        <h1 className="mb-4">Sign In</h1>
        <label htmlFor="name" className="form-label">
          Enter Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-control"
          placeholder="Name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="error text-danger">{errors.name}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Enter Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
          placeholder="Email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="error text-danger">{errors.email}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="number" className="form-label">
          Enter Mobile Number
        </label>
        <input
          id="number"
          name="number"
          type="text"
          className="form-control"
          placeholder="Mobile Number"
          value={values.number}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.number && (
          <p className="error text-danger">{errors.number}</p>
        )}
      </div>
      
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Enter Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="form-control"
          placeholder="Password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="error text-danger">{errors.password}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="con_password" className="form-label">
          Confirm Password
        </label>
        <input
          id="con_password"
          name="con_password"
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          value={values.con_password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.con_password && (
          <p className="error text-danger">{errors.con_password}</p>
        )}
      </div>

      <div className="mb-3">
        <button type="submit" className="btn btn-primary me-3">
          Submit
        </button>
        <button type="button" className="btn btn-secondary" onClick={resetForm}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default SignUp;
