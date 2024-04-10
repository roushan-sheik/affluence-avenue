import { Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Btn from "../../components/button/Btn";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      photo: "",
      password: "",
    },
    // We have a validation schema with formik to validate our field
    validationSchema: yup.object({
      name: yup.string().required().min(3),
      email: yup.string().email().required(),
      photo: yup.string().required().url(),
      password: yup.string().min(8).required(),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });
  // name validaton
  let renderNameErrors = formik.touched.name && formik.errors.name && (
    <span className="text-red-500">{formik.errors.name}</span>
  );
  // email validaton
  let renderEmailErrors = formik.touched.email && formik.errors.email && (
    <span className="text-red-500">{formik.errors.email}</span>
  );

  // photo url validaton
  let renderPhotoErrors = formik.touched.photo && formik.errors.photo && (
    <span className="text-red-500">{formik.errors.photo}</span>
  );

  // password validaton
  let renderPasswordErrors = formik.touched.password &&
    formik.errors.password && (
      <span className="text-red-500">{formik.errors.password}</span>
    );
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className=" text_pri text-4xl my-4 font-bold text-center">
        Register
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex max-w-md flex-col md:w-[50%] w-[94%] gap-4"
      >
        {/* name  */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="arifa moni"
            onChange={formik.handleChange}
            required
            shadow
            name="name"
          />
        </div>
        {renderNameErrors}
        {/* email  */}
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
        {/* photo url  */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photo" value="Photo Url" />
          </div>
          <TextInput
            id="photo"
            type="text"
            placeholder="photo url.."
            onChange={formik.handleChange}
            required
            shadow
            name="photo"
          />
        </div>
        {renderPhotoErrors}
        {/* password  */}
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

        <p className=" text-base text_sec text-center ">
          Already have an Account?{" "}
          <Link to="/login">
            <span className="text-sky-500">Register</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
