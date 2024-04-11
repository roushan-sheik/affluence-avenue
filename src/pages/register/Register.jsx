import { Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Btn from "../../components/button/Btn";
import useUserContext from "../../hooks/useUserContext";

const Register = () => {
  const { createUser } = useUserContext();
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
      const { email, password } = value;
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
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
            placeholder="http://arifamoni.com/profile.png"
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
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            required
            onChange={formik.handleChange}
            shadow
            autoComplete="on"
            name="password"
          />
        </div>
        {renderPasswordErrors}
        {/* submit button  */}
        <Btn type={"submit"}> Register</Btn>
        <p className=" text-base text_sec text-center ">
          Already have an Account?{" "}
          <Link to="/login">
            <span className="text-sky-500">Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
