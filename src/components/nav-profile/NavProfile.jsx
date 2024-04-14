import { Avatar, Dropdown } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import useUserContext from "../../hooks/useUserContext";

const NavProfile = () => {
  const { logoutUser, user } = useUserContext();
  console.log(user);
  function handleLogoutClick() {
    logoutUser()
      .then((result) => {
        console.log("successfully LogOut");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <div>
      <Dropdown
        className=""
        label={
          <Avatar
            img={
              user.photoURL ||
              "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
            }
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
          <span className="block text-sm"> {user.displayName || "Empty"}</span>
          <span className="block truncate text-sm font-medium">
            {user.email || "Empty"}
          </span>
        </Dropdown.Header>
        <Link to={"profile"}>
          <Dropdown.Item>Profile</Dropdown.Item>
        </Link>
        <Link to={"update-profile"}>
          <Dropdown.Item>Update Profile</Dropdown.Item>
        </Link>
        <Dropdown.Item onClick={handleLogoutClick}>{"LogOut"}</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default NavProfile;
