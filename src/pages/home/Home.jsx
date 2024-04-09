import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { data } = useLoaderData();
  console.log(data);
  return <div>Home</div>;
};

export default Home;
