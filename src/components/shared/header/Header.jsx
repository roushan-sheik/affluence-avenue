import { Avatar, Button } from "flowbite-react";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";
import { Link } from "react-router-dom";
import Navlist from "../../navlist/Navlist";
import BannerSlider from "../../slider/banner/BannerSlider";

function Header() {
  const user = true;
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
            <Link>
              <h2 className="font-semibold text_pri cursor-pointer md:text-3xl text-lg">
                AffluenceAvenue
              </h2>
            </Link>
          </div>
          {/* center side nav  */}
          <div>
            <div className="hidden lg:flex gap-4 items-center ">
              {<Navlist />}
            </div>
          </div>
          {/* right side nav  */}
          <div>
            {user ? (
              <div className=" flex gap-2 md:gap-6 items-center">
                <Avatar
                  img="https://res.cloudinary.com/dakrgonvu/image/upload/v1709822675/profile-500into500-2_otijsr.png"
                  rounded
                  statusPosition="top-right"
                  status="online"
                  className="cursor-pointer"
                />
                <Button className="focus:ring-0 bg_pri" pill>
                  LogOut
                </Button>
              </div>
            ) : (
              <Button>Login</Button>
            )}
          </div>
        </div>
      </header>
      {/* banner  */}
      <BannerSlider />
    </div>
  );
}

export default Header;
