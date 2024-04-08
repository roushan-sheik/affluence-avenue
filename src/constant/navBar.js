import Home from "../pages/home/Home";
import LuxuryDetails from "../pages/luxury-details/LuxuryDetails";
import Profile from "../pages/profile/Profile";
import Register from "./../pages/register/Register";

export const navData = [
  {
    name: "Home",
    path: "/",
    page: Home,
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
