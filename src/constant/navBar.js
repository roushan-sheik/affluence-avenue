import Home from "../pages/home/Home";
import LuxuryDetails from "../pages/luxury-details/LuxuryDetails";
import Profile from "../pages/profile/Profile";
import Register from "./../pages/register/Register";

export const navData = [
  {
    name: "Home",
    path: "/",
    element: Home,
  },
  {
    name: "",
    path: "/luxury/:id",
    element: LuxuryDetails ,
  },
  {
    name: "Profile",
    path: "/profile",
    element: Profile ,
  },
  {
    name: "Register",
    path: "/register",
    element: Register ,
  },
];
