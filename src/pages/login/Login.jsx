import { Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import Btn from "../../components/button/Btn";
import LogInButton from "../../components/button/LogInButton";
const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className=" text_pri text-4xl my-4 font-bold text-center">LogIn</h2>
      <form className="flex max-w-md flex-col md:w-[50%] w-[94%] gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            required
            shadow
            name="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow name="password" />
        </div>
        <Btn> Login</Btn>
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
