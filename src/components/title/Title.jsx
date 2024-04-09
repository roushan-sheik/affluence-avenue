import React from "react";

const Title = ({ title, description }) => {
  return (
    <div className="mt-24 mb-10">
      <h2 className="text-center font-bold md:text-4xl text-2xl mb-4">
        {title}
      </h2>
      <p className="text_sec text-base text-center w-[60%] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default Title;