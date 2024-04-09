import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navData } from "../../../constant/navBar";
function Header() {
  return (
    <Navbar fluid rounded>
      <Link Link to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Affluence Avenue
        </span>
      </Link>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navData.map((data) => {
          return <NavLink to={data.path}>{data.name}</NavLink>;
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
