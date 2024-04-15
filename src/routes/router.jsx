import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import LuxuryDetails from "../pages/luxury-details/LuxuryDetails";
import ErrorPage from "../pages/not-found/ErrorPage";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import SpecialState from "../pages/special-state/SpecialState";
import UpdateProfile from "../pages/update-profile/UpdateProfile";
import loader, { specialLoader } from "./loader";
import PrivateRoute from "./privet/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loader,
      },
      {
        path: "/special-state",
        element: (
          <PrivateRoute>
            <SpecialState />
          </PrivateRoute>
        ),
        loader: specialLoader,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/luxury/:title",
        element: (
          <PrivateRoute>
            <LuxuryDetails />
          </PrivateRoute>
        ),
        loader: loader,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
