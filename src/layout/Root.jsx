import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";

const Root = () => {
  return (
    <div className="mx-auto max-w-[2400px] bg-gray-50">
      <div className="">
        <Header />
        <div className="">{<Outlet />}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
