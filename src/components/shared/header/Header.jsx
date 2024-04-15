import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";
import { Link } from "react-router-dom";
import useUserContext from "../../../hooks/useUserContext";
import Btn from "../../button/Btn";
import NavProfile from "../../nav-profile/NavProfile";
import Navlist from "../../navlist/Navlist";

function Header() {
  const { user } = useUserContext();
  const [openBar, setOpenBar] = React.useState(false);
  return (
    <div>
      <header>
        <div className="py-3 mt-3 flex justify-between items-center w-[90%] mx-auto">
          {/* left side nav  */}
          <div className="flex gap-2 ">
            {/* bars  */}
            <div>
              <span className="text-2xl block md:hidden">
                <button onClick={() => setOpenBar(!openBar)}>
                  {openBar ? <MdOutlineClear /> : <FaBarsStaggered />}
                </button>
              </span>
              <div className="md:hidden block ">
                {openBar && (
                  <div className="z-50 bg-gray-200 p-4 w-[200px] absolute top-16 flex gap-2 flex-col rounded-sm">
                    {<Navlist />}
                  </div>
                )}
              </div>
            </div>
            {/* nav title  */}
            <Link to={"/"}>
              <h2 className="font-semibold text_pri cursor-pointer md:text-3xl text-lg">
                AffluenceAvenue
              </h2>
            </Link>
          </div>
          {/* center side nav  */}
          <div>
            <div className="hidden lg:flex gap-8 items-center ">
              {<Navlist />}
            </div>
          </div>
          {/* right side nav  */}
          <div>
            <div className=" flex gap-2 md:gap-6 items-center">
              {user ? (
                <NavProfile />
              ) : (
                <Link to={"/login"}>
                  <Btn>Login</Btn>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* banner  */}
    </div>
  );
}

export default Header;
