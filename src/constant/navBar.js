import Home from "../pages/home/Home";
import LuxuryDetails from "../pages/luxury-details/LuxuryDetails";
import Profile from "../pages/profile/Profile";
import homeLoader from "../routes/loader";


import Register from "./../pages/register/Register";
import { bannerData } from "./banner";

export const navData = [
  {
    name: "Home",
    path: "/",
    page: Home,
    loader: homeLoader,
  },
  {
    name: "",
    path: "/luxury/:id",
    page: LuxuryDetails,
  },
  {
    name: "Profile",
    path: "/profile",
    page: Profile,
  },
  {
    name: "Register",
    path: "/register",
    page: Register,
  },
];
