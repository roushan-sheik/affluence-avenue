import React from "react";
import { useLoaderData } from "react-router-dom";
import BannerSlider from "../../components/slider/banner/BannerSlider";
import State from "../../components/state/State";
import Title from "../../components/title/Title";
import { stateTitle } from "../../constant/title";

const Home = () => {
  const { data } = useLoaderData();
  console.log(import.meta.env.AUTH_APIKEY);

  return (
    <div>
      <BannerSlider />
      <main className="main_">
        <Title title={stateTitle.title} description={stateTitle.description} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((state) => (
            <State key={state.id} stateData={state} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
