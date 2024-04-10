import { Avatar, Dropdown } from "flowbite-react";
import React from "react";
import { navData } from "../../constant/navBar";
const NavProfile = () => {
  return (
    <div>
      <Dropdown
        className=""
        label={
          <Avatar
            img="https://res.cloudinary.com/dakrgonvu/image/upload/v1709822675/profile-500into500-2_otijsr.png"
            rounded
            statusPosition="top-right"
            status="online"
            className="cursor-pointer "
          />
        }
        inline
        arrowIcon={true}
      >
        <Dropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">
            name@flowbite.com
          </span>
        </Dropdown.Header>
        {navData.map((data) => {
          if (data.profile === true) {
            return <Dropdown.Item>{data.name}</Dropdown.Item>;
          }
        })}
        <Dropdown.Item>{"LogOut"}</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default NavProfile;
