import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import LogInButton from "../../components/button/LogInButton";
const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className=" text_pri text-4xl my-4 font-bold text-center">LogIn</h2>
      <form className="flex max-w-md flex-col w-[50%] gap-4">
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
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow />
        </div>
        <div></div>
        <Button type="submit">Login</Button>
        <p className=" text-base text_third text-center ">Or login with</p>
        <LogInButton />
      </form>
    </div>
  );
};

export default Login;
