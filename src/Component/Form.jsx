// import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Validation = yup.object({
  name: yup.string().min(2).max(25).required("Please enter your name"),
  email: yup.string().email().required("Please enter your email"),
  number: yup
  .number()
  .min(10)
  .required("Please enter a number"),
  password: yup
    .string()
    .min(6)
    .required("Please enter your password"),
  con_password: yup
    .string()
    .required()
    .oneOf([
      yup.ref("password"),
      null,
      "Password and Confirm Password should match",
    ]),
});
const initialValues = {
  name: "",
  email: "",
  number: "",
  password: "",
  con_password: "",
};
const Form = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: Validation,
    onSubmit: (values) => {
      console.log(values);
      // console.log(errors);
    },
  });

  // function show(){
  //   console.log(errors);
  // }

  // show();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name</label>
        <br />
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <br />
        { errors.name ? errors.name : null }
        <br />
        <label>Enter Your Email</label>
        <br />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <br />
        { errors.email ? errors.email : null }

        <br />
        <label>Enter Mobile Number</label>
        <br />
        <input
          name="number"
          type="text"
          placeholder="Mobile Number"
          value={values.number}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <br />
        { errors.number ? errors.number : null }

        <br />
        <label>Enter Password</label>
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={values.passowrd}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <br />
        { errors.password ? errors.password : null }

        <br />
        <label>Enter Conform Password</label>
        <br />
        <input
          name="con_password"
          type="password"
          placeholder="Conform Password"
          value={values.con_password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <br />
        { errors.con_password ? errors.con_password : null }

        <br />
        <button type="submit">Submit</button>
        <button>Reset</button>
      </form>
    </>
  );
};
export default Form;
