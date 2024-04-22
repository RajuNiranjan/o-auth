import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "@/redux/actions/DarkModeSlice";
import { RootState } from "@/redux/types/DarkModeType";

const RightMenu = () => {
  const path = usePathname();

  console.log("current Path", path);

  const isDarkModeOn = useSelector(
    (state: RootState) => state.darkMode.isDarkModeOn
  );
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const Links = [
    {
      path: "/",
      pathName: "About",
      icon: <FaRegCircleUser />,
    },
    {
      path: "/projects",
      pathName: "Projects",
      icon: <GrProjects />,
    },
    {
      path: "/resume",
      pathName: "Resume",
      icon: <FaRegFileAlt />,
    },
    {
      path: "/contact",
      pathName: "Contact",
      icon: <RiContactsLine />,
    },
  ];

  return (
    <div
      className={`shadow-md p-4 rounded-md h-full w-full border  ${
        isDarkModeOn ? "bg-black text-white" : "bg-white"
      } transition-all duration-500`}>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4 justify-center">
          {Links.map((item, index) => (
            <div
              key={index}
              className={`flex justify-center items-center flex-col ${
                path === "/" ? "hover:text-blue-500" : ""
              } `}>
              <Link
                href={item.path}
                className={`h-7 w-7  flex justify-center items-center rounded-md shadow-md p-1 hover:p-0 transition-all duration-200 ${
                  path === item.path
                    ? isDarkModeOn
                      ? "bg-white text-black"
                      : "bg-blue-500 text-white"
                    : isDarkModeOn
                    ? "bg-black text-white border "
                    : "bg-white"
                }`}>
                {item.icon}
              </Link>
              <small
                className={`${
                  path === item.path ? "text-blue-500 font-medium" : ""
                }`}>
                {item.pathName}
              </small>
            </div>
          ))}
        </div>
        <div>
          <button
            className={`rounded-full border h-7 w-7 flex justify-center items-center shadow-md transition-all duration-300 ${
              isDarkModeOn ? "bg-black text-white " : ""
            }`}
            onClick={handleToggleDarkMode}>
            {isDarkModeOn ? <IoMoonOutline /> : <IoSunnyOutline />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
