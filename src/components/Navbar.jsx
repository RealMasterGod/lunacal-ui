import React from "react";

const Navbar = ({ active, setActive }) => {
  // hover:shadow-myShadow
  return (
    <nav className="bg-[#171717] rounded-[23px] w-[92%] xl:w-[92%] lg:w-[98%] md:w-[100%] min-h-[62px] p-[5px] shadow-[0px_4.96px_12.4px_2.48px_#00000040_inset]">
      <ul className=" h-full list-none md:gap-2 flex text-white rounded-[23px] items-center justify-between gap-4">
        <li
          id="about"
          onClick={() => setActive("about")}
          className={
            active === "about"
              ? "transition-all shadow-myShadow xl:text-lg md:text-base bg-[#28292F] rounded-[20px] hover:bg-[#28292F] hover:rounded-[20px] flex-1 text-center w-full h-full flex items-center justify-center cursor-pointer font-medium text-lg"
              : "hover:bg-[#28292F] xl:text-base md:text-sm transition-all rounded-[20px] hover:rounded-[20px] flex-1 text-center w-full h-full flex items-center justify-center cursor-pointer font-medium text-lg"
          }
        >
          About
        </li>
        <li
          id="experience"
          onClick={() => setActive("experience")}
          className={
            active === "experience"
              ? "transition-all shadow-myShadow xl:text-lg md:text-base bg-[#28292F] rounded-[20px] hover:bg-[#28292F] hover:rounded-[20px] flex-1 text-center w-full h-full flex items-center justify-center cursor-pointer font-medium text-lg"
              : "hover:bg-[#28292F] xl:text-base md:text-sm rounded-[20px] transition-all hover:rounded-[20px] flex-1 text-center w-full h-full flex items-center justify-center cursor-pointer font-medium text-lg"
          }
        >
          Experience
        </li>
        <li
          id="recommended"
          onClick={() => setActive("recommended")}
          className={
            active === "recommended"
              ? "transition-all shadow-myShadow px-1 rounded-[20px] xl:text-lg md:text-base bg-[#28292F] hover:bg-[#28292F] hover:rounded-[20px] flex-1 text-center w-full h-full flex items-center justify-center cursor-pointer font-medium text-lg"
              : "hover:bg-[#28292F] xl:text-base px-1 rounded-[20px] md:text-sm transition-all hover:rounded-[20px] flex-1 text-center w-full h-full flex items-center justify-center cursor-pointer font-medium text-lg"
          }
        >
          Recommended
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
