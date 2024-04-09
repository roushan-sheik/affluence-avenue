import React from "react";
import { NavLink } from "react-router-dom";
import { navData } from "../../constant/navBar";

const Navlist = () => {
  return (
    <>
      {navData.map((data) => {
        return (
          <NavLink
            to={data.path}
            className={({ isActive, isPending }) =>
              isActive
                ? "font-semibold text-[#ff6b6b] border-2 border-[#ff6b6b] rounded-lg lg:px-4 px-2 lg:py-3 py-[6px]"
                : isPending
                ? "pending"
                : "flex items-center"
            }
          >
            {data.name}
          </NavLink>
        );
      })}
    </>
  );
};

export default Navlist;
