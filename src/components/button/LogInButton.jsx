"use client";

function LogInButton() {
  return (
    <div className=" flex gap-4 flex-col md:flex-row">
      <button className="flex gap-2 px-3 py-2 rounded-xl  justify-center items-center bg-white text_pri border-2 ">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png"
          alt=""
          className="w-4 h-4  "
        />
        <span> Sign in with Google</span>
      </button>
      <button className="flex gap-2 px-3 py-2 rounded-xl  justify-center items-center bg-white text_pri border border-gray-500">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt=""
          className="w-4 h-4  "
        />
        <span> Sign in with Github</span>
      </button>
    </div>
  );
}
export default LogInButton;
