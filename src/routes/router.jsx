import { createBrowserRouter } from "react-router-dom";
import { navData } from "../constant/navBar";
import Root from "../layout/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: navData?.map((nav) => {
      return {
        path: nav.path,
        element: <nav.page />,
      };
    }),
  },
]);
