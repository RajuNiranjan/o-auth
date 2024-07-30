import Link from "next/link";
import React, { useRef } from "react";
import { BsGithub } from "react-icons/bs";
import { CiMobile1 } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { LiaLinkedinIn } from "react-icons/lia";
import { RiDownloadLine } from "react-icons/ri";
import ProfileImage from "../../public/asserts/profile.jpg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/types/DarkModeType";

const LeftMenu = () => {
  const year = new Date().getFullYear();
  const isDarkModeOn = useSelector(
    (state: RootState) => state.darkMode.isDarkModeOn
  );
  console.log("hlksajdf");

  return (
    <div
      className={`"shadow-md p-4 rounded-md h-full w-full border  ${
        isDarkModeOn ? "bg-black text-white" : "bg-white"
      } transition-all duration-500`}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="relative flex flex-col justify-between h-full  gap-4">
          <div className="flex flex-col gap-2 items-center justify-center mt-20">
            <Image
              src={ProfileImage}
              alt="useImage"
              width={200}
              height={200}
              className="absolute -top-14 rounded-full w-32 h-32 object-cover shadow-md border-blue-200 border-2"
            />
            <h1 className="text-xl font-bold ">NIRANJAN RAJU</h1>
            <h3
              className={`font-semibold bg-gray-200 px-4 rounded-sm ${
                isDarkModeOn ? "bg-white text-black" : "bg-gray-200"
              } transition-all duration-500`}
            >
              Full Stack Developer
            </h3>
          </div>
          <div className="flex gap-4 text-2xl my-4">
            <Link
              href="https://www.linkedin.com/in/raju-niranjan/"
              target="blank"
            >
              <LiaLinkedinIn className="bg-blue-500 p-1 hover:p-0 transition-all duration-300 rounded-sm text-white" />
            </Link>
            <Link href="https://github.com/RajuNiranjan" target="blank">
              <BsGithub className="bg-orange-500 p-1 hover:p-0 transition-all duration-300 rounded-sm text-white" />
            </Link>
          </div>

          <div className="flex flex-col gap-4 my-4">
            <div className="flex gap-4">
              <div className="text-2xl border rounded-md text-red-600 h-7 w-7 bg-white shadow-md flex justify-center items-center p-1 hover:h-9 hover:w-9 transition-all duration-300 ">
                <IoMailOutline />
              </div>
              <div>
                <h3 className="font-medium ">Email</h3>
                <p className="hover:text-blue-500 transition-all duration-300 cursor-pointer">
                  rajuniranjan1910@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl border rounded-md text-blue-600 h-7 w-7 bg-white shadow-md flex justify-center items-center p-1 hover:h-9 hover:w-9 transition-all duration-300 ">
                <CiMobile1 />
              </div>
              <div>
                <h3 className="font-medium">Mobile</h3>
                <p className="hover:text-blue-500 transition-all duration-300 cursor-pointer">
                  +91-9849592791
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl border rounded-md text-green-600 h-7 w-7 bg-white shadow-md flex justify-center items-center p-1 hover:h-9 hover:w-9 transition-all duration-300 ">
                <HiOutlineLocationMarker />
              </div>
              <div>
                <h3 className="font-medium">Address</h3>
                <p>Guntur, Andhra Pradesh.</p>
              </div>
            </div>
          </div>

          <div className="m-auto ">
            <Link
              download="download"
              href="/asserts/resume.pdf"
              target="_blank"
            >
              <button
                className={`flex justify-center items-center gap-2 border w-max px-4 rounded-md  py-2 transition-all duration-300 ${
                  isDarkModeOn
                    ? "bg-transparent text-white   hover:bg-white hover:text-black "
                    : "bg-transparent text-black border-blue-500 hover:text-white hover:bg-blue-500 "
                }`}
              >
                {" "}
                <RiDownloadLine /> Download CV
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <small className="text-gray-400">
            &copy; {year} All Rights Reserved
          </small>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
