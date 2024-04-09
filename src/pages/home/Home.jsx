import React from "react";
import { useLoaderData } from "react-router-dom";
import { stateTitle } from "../../constant/title";
import Title from "../../components/title/Title";
const Home = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <Title title={stateTitle.title} description={stateTitle.description} />
      <div></div>
    </div>
  );
};

export default Home;
