import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../components/button/Btn";
import Inp from "../../components/input/Inp";

const Register = () => {
  const [error, setError] = React.useState(null);
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    photoUrl: "",
    password: "",
  });
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  // handle the form
  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    console.log(user);
    // validation
    // Must have an Uppercase letter in the password
    const checkUpper = /^(?=.*[A-Z]).+$/;
    if (user.password.length < 8) {
      setError("Password should be minimum 8 characters.");
      return;
    }

    setUser({ name: "", email: "", photoUrl: "", password: "" });
    e.target.reset();
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className=" text_pri text-4xl my-4 font-bold text-center">
        Register
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col md:w-[50%] w-[94%] gap-4"
        action="#"
      >
        {/* inputs  */}
        <Inp
          type="text"
          name={"name"}
          required={true}
          label={"Name"}
          value={user.name}
          placeholder={"name"}
          onChange={handleChange}
        />
        <Inp
          type="text"
          name={"email"}
          value={user.email}
          label={"Email"}
          required={true}
          placeholder={"email"}
          onChange={handleChange}
        />
        <Inp
          type="text"
          name={"photoUrl"}
          label={"Photo Url"}
          value={user.photoUrl}
          required={true}
          placeholder={"http://server/arifamoni.jpg"}
          onChange={handleChange}
        />
        <Inp
          type="password"
          name={"password"}
          required={true}
          value={user.password}
          label={"Password"}
          onChange={handleChange}
        />
        {/* error message */}
        <span className="text-red-500">{error}</span>
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
