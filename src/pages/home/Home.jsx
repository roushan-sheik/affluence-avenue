import { Button } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    
  );
};

export default Home;
