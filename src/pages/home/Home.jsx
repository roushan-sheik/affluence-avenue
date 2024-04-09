import React from "react";
import { useLoaderData } from "react-router-dom";
import BannerSlider from "../../components/slider/banner/BannerSlider";

const Home = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      {/* Banner section  */}
      <div className="h-[500px] overflow-hidden ">
        <BannerSlider />
      </div>
    </div>
  );
};

export default Home;
