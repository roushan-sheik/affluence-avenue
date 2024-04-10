import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import Btn from "../button/Btn";
const State = ({ stateData }) => {
  const {
    id,
    state_title,
    image,
    segment,
    location,
    facilities,
    status,
    description,
    monthly_cost,
  } = stateData;
  return (
    <div className="p-4 rounded-xl border-2">
      <div className="h-[250px] rounded-lg overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover hover:scale-110 duration-300"
          alt=""
        />
      </div>
      {/* content box  */}
      <div className="relative">
        <h3 className="text-2xl text_pri font-semibold mt-4">{state_title}</h3>
        <h3 className="text-xl text_sec my-2 font-medium ">{segment}</h3>
        <div className="flex gap-2 items-center mb-2">
          <IoLocationOutline />
          <h4 className="text-base text_third   ">{location}</h4>
        </div>
        <h4 className="text-base text_third mb-2  ">
          <span className="font-medium ">Mouthy Cost: </span>
          {monthly_cost}$
        </h4>
        <h4 className="text-base text_third mb-2 ">{status}</h4>
        <div>
          {facilities.map((item) => {
            return (
              <p className="text_third " key={item}>
                # {item}
              </p>
            );
          })}
        </div>
        <Btn style={"mt-3 w-full relative bottom-0 "}>View Details</Btn>
      </div>
    </div>
  );
};

export default State;
