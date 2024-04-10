import React from "react";

const Bars = () => {
  return (
    <div>
      <label
        htmlFor="check"
        className="flex flex-col gap-[5px] p-3 rounded-lg hover:bg-sky-100 cursor-pointer"
      >
        <input type="checkbox" id="check" className="peer/check hidden" />
        <span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:rotate-45 peer-checked/check:translate-y-2 duration-300"></span>
        <span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:scale-0 duration-300"></span>
        <span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:-rotate-45 peer-checked/check:-translate-y-2 duration-300"></span>
      </label>
    </div>
  );
};

export default Bars;
