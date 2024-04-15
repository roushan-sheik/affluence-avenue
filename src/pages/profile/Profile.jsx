import React from "react";
import { Helmet } from "react-helmet-async";
import useUserContext from "../../hooks/useUserContext";

const Profile = () => {
  const { user } = useUserContext();
  const { email, displayName, photoURL, phone } = user || "";
  return (
    <div className="md:w-1/2 mx-auto bg-gray-200 p-6 flex gap-4 mt-4  justify-center items-center flex-col md:flex-row">
      <Helmet>
        <title>AffluenceAvenue | Profile</title>
      </Helmet>
      <div className="md:h-[250px]  md:w-[250px] h-[150px]  w-[150px] rounded-full overflow-hidden">
        <img
          src={photoURL || ""}
          className="w-full h-full object-cover"
          alt="photo not found"
        />
      </div>
      {/* content box  */}
      <div className="felx flex-col gap-3 text-center md:text-start justify-center items-center">
        <h2 className="font-semibold text-xl">
          {displayName || "user name not found"}
        </h2>
        <h2 className="text-lg text_third">{email || "email not found"}</h2>
        <h2 className="text-lg text_third">Phone: {phone || " not found"}</h2>
      </div>
    </div>
  );
};

export default Profile;
