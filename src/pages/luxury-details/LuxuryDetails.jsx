import React from "react";
import { Helmet } from "react-helmet-async";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Btn from "../../components/button/Btn";

const LuxuryDetails = () => {
  const { data } = useLoaderData();
  const { title } = useParams();
  const result = data.filter((state) => state.state_title === title);
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
    area,
  } = result[0];

  return (
    <div className="flex gap-6 flex-col md:p-16 p-4">
      <Helmet>
        <title>AffluenceAvenue State Details</title>
      </Helmet>
      {/* image box  */}
      <div className="h-[250px] md:h-[400px]">
        <img className="h-full w-full object-cover" src={image} alt="" />
      </div>
      {/* content box  */}
      <div>
        <div className="relative">
          <div className="flex justify-between items-center mt-3">
            <h4 className="text-base text_third mb-2 bg-gray-200 px-3 py-2 rounded-lg ">
              {status}
            </h4>
            <h4 className="text-base text_third mb-2 bg-gray-200 px-3 py-2 rounded-lg ">
              Area {area}
            </h4>
          </div>
          {/* had content  */}
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div>
              <h3 className="text-2xl text_pri font-semibold mt-2">
                {state_title}
              </h3>
              <h3 className="text-xl text_sec my-2 font-medium ">{segment}</h3>
              <div className="flex gap-2 items-center mb-2">
                <IoLocationOutline />
                <h4 className="text-base text_third   ">{location}</h4>
              </div>
              <h4 className="text-base text_third mb-2 ">
                <span className="font-medium ">Mouthy Cost: </span>
                {monthly_cost}$
              </h4>
            </div>

            <div>
              {facilities.map((item) => {
                return (
                  <p className="text_third " key={item}>
                    # {item}
                  </p>
                );
              })}
            </div>
          </div>
          <h4 className="text-base text_third   ">{description}</h4>

          <Link to={-1}>
            <Btn style={"mt-3 w-250 relative bottom-0 "}>Back</Btn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LuxuryDetails;
