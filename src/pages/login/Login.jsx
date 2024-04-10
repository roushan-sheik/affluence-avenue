import { Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Btn from "../../components/button/Btn";
import LogInButton from "../../components/button/LogInButton";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // We have a validation schema with formik to validate our field
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  } );
    let renderEmailErrors = formik.touched.email && formik.errors.email && (
      <span className="text-red-500">{formik.errors.email}</span>
    );
    let renderPasswordErrors = formik.touched.password &&
      formik.errors.password && (
        <span className="text-red-500">{formik.errors.password}</span>
      );
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className=" text_pri text-4xl my-4 font-bold text-center">LogIn</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex max-w-md flex-col md:w-[50%] w-[94%] gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            onChange={formik.handleChange}
            required
            shadow
            name="email"
          />
          
        </div>
        {renderEmailErrors}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            required
            onChange={formik.handleChange}
            shadow
            name="password"
          />
        </div>
        {renderPasswordErrors}
        <Btn type={"submit"}> Login</Btn>
        <p className=" text-base text_third text-center ">Or login with</p>
        <LogInButton />
        <p className=" text-base text_sec text-center ">
          Do not have an Account?{" "}
          <Link to="/register">
            <span className="text-sky-500">Register</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
