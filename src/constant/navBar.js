import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import LuxuryDetails from "../pages/luxury-details/LuxuryDetails";
import Profile from "../pages/profile/Profile";
import SpecialState from "../pages/special-state/SpecialState";
import UpdateProfile from "../pages/update-profile/UpdateProfile";
import loader from "../routes/loader";
import Login from "./../pages/login/Login";
import Register from "./../pages/register/Register";

export const navData = [
  {
    name: "Home",
    path: "/",
    page: Home,
    loader: loader,
    nav: true,
  },
  {
    name: "Special State",
    path: "/special-state",
    page: SpecialState,
    nav: true,
  },
  {
    name: "Blog",
    path: "/blog",
    page: Blog,
    nav: true,
  },
  {
    name: "",
    path: "/luxury/:title",
    page: LuxuryDetails,
    loader: loader,
  },
  {
    name: "Profile",
    path: "/profile",
    page: Profile,

    profile: true,
  },
  {
    name: "Update profile",
    path: "/update-profile",
    page: UpdateProfile,
    profile: true,
  },
  {
    name: "Register",
    path: "/register",
    page: Register,
  },
  {
    name: "LogIn",
    path: "/login",
    page: Login,
  },
];
