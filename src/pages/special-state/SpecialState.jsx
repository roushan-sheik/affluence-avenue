import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Special from "../../components/special/Special";

const SpecialState = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>AffluenceAvenue | Special State</title>
      </Helmet>
      <div>
        {data?.map((state) => {
          return <Special key={state.id} state={state} />;
        })}
      </div>
    </div>
  );
};

export default SpecialState;
