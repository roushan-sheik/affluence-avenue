import React from "react";

const Inp = ({
  style,
  name,
  onClick,
  label,
  labelStyle,
  placeholder,
  defaultValue,
  object,
}) => {
  return (
    <div className="relative w-max rounded-lg">
      <input
        className={`peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none ${style}`}
        type="text"
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onClick={onClick}
        {...object}
        id="navigate_ui_input_33"
      />
      <label
        className={`absolute -top-2 left-[10px] rounded-md px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-sky-300 peer-focus:text-xs peer-focus:text-sky-800 dark:peer-focus:text-sky-400 dark:peer-focus:bg-[#0F172A] ${labelStyle} `}
        htmlFor="navigate_ui_input_33"
      >
        {label}
      </label>
    </div>
  );
};

export default Inp;
