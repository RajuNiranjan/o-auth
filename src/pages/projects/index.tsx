import Image from "next/image";
import React from "react";
import pro1 from "../../../public/projects/mybomma.png";
import pro2 from "../../../public/projects/ecomerce.png";
import pro3 from "../../../public/projects/weather.png";
import pro4 from "../../../public/projects/todoapp.png";
import pro5 from "../../../public/projects/portfolio.png";
import pro6 from "../../../public/projects/ecommerse.png";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import { LuEye } from "react-icons/lu";
import { RootState } from "@/redux/types/DarkModeType";
import { useSelector } from "react-redux";

const projectsData = [
  {
    id: 7,
    title: "myBOMMA",
    description:
      "Explore a cutting-edge movie platform crafted with Next.js, Node.js, Express.js, and MongoDB. Seamlessly manage and discover your favorite films through a user-friendly interface that adapts to all screens. Engage with movies like never before!",
    image: pro1,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/RajuNiranjan/mybomma",
    previewUrl: "https://mybomma.vercel.app/",
  },
  {
    id: 5,
    title: "BigBag Ecommerce",
    description:
      "BigBag, an e-commerce hub using React.js and Tailwind CSS, offers cart and wishlist features. It categorizes items by gender (male, female, kids) and handles payments. it provides location-based services for smoother user interaction.",
    image: pro2,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RajuNiranjan/BigBagEcommerce",
    previewUrl: "https://big-bag-ecommerce.vercel.app/",
  },
  {
    id: 0,
    title: "Personal Portfolio Website",
    description:
      "Sleek Next.js portfolio showcasing creativity, powered by Tailwind CSS, ensuring seamless, responsive design excellence.",
    image: pro5,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/RajuNiranjan/portfolio",
    previewUrl: "https://portfolio-ashy-two-49.vercel.app/#contact",
  },
  {
    id: 1,
    title: "Weather Website",
    description:
      "Dynamic React weather app leveraging API data, delivering accurate forecasts with intuitive design, enhancing your daily planning effortlessly.",
    image: pro3,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/RajuNiranjan/weather-app",
    previewUrl: "https://weather-app-jet-sigma.vercel.app/",
  },
  {
    id: 3,
    title: "ToDo Website",
    description:
      "Dynamic React e-commerce site with CSS finesse, ensuring responsive design for seamless shopping experiences.",
    image: pro4,
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/RajuNiranjan/todoapp",
    previewUrl: "https://todoapp-tan-iota.vercel.app/",
  },
  {
    id: 4,
    title: "Ecommerce Website",
    description:
      "Dynamic React e-commerce site with Tailwind CSS finesse, ensuring responsive design for seamless shopping experiences.",
    image: pro6,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ankit-Mohanta/login-page-thumbstack",
    previewUrl: "https://login-page-thumbstack.vercel.app/",
  },
];

const Projects = () => {
  const isDarkModeOn = useSelector(
    (state: RootState) => state.darkMode.isDarkModeOn
  );

  return (
    <div
      className={`shadow-md p-4 rounded-md h-full w-full border overflow-auto  ${
        isDarkModeOn ? "bg-black text-white" : "bg-white"
      } transition-all duration-500`}>
      <style>
        {`
          /* WebKit */
          ::-webkit-scrollbar {
            width: 2px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: rgba(156, 163, 175, 0.5);
            border-radius: 4px;
          }

          /* Firefox */
          scrollbar-width: thin;
          scrollbar-color: gray transparent;
        `}
      </style>{" "}
      <div>
        <h1 className="font-bold text-xl">Projects</h1>
        <div className="grid grid-cols-2 gap-4 my-4">
          {projectsData.map((item, index) => (
            <div
              key={index}
              className={` bg-gray-100 p-2 rounded-md shadow-md border h-full ${
                isDarkModeOn ? "bg-black text-black" : "bg-white"
              } transition-all duration-500 `}>
              <div>
                <Image
                  src={item.image}
                  width="300"
                  height="300"
                  alt=""
                  className="w-full cursor-pointer rounded-lg shadow-md"
                />
              </div>
              <div className="my-2">
                <h1 className="text-md font-medium">{item.title}</h1>
                <small>{item.description}</small>
                <div>
                  <div className="flex justify-end items-center gap-4">
                    <Link href={item.gitUrl}>
                      <div className="w-10 h-10 rounded-full bg-black bg-opacity-30 hover:bg-opacity-100 transition-all duration-300 text-white flex justify-center items-center">
                        <FaCode />
                      </div>
                    </Link>
                    <Link href={item.previewUrl}>
                      <div className="w-10 h-10 rounded-full bg-black bg-opacity-30 hover:bg-opacity-100 transition-all duration-300 text-white flex justify-center items-center">
                        <LuEye />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
