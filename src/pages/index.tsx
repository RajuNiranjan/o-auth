import { RootState } from "@/redux/types/DarkModeType";
import React from "react";
import { FaCode } from "react-icons/fa";
import { useSelector } from "react-redux";

const AboutCardData = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Proficient in Next.js, Tailwind CSS, TypeScript, and React.js, I create dynamic websites with optimal user experiences. Prioritizing efficiency and scalability, I seamlessly integrate cutting-edge technologies, meeting diverse client needs.",
    bg: "blue",
  },
  {
    icon: <FaCode />,
    title: "App Development",
    description:
      "Proficient in app development, I leverage cutting-edge technologies like React Native, TypeScript, and Redux. Prioritizing efficiency and scalability, I ensure seamless integration and optimal user experiences, meeting diverse client needs with finesse.",
    bg: "red",
  },
];

const About = () => {
  const isDarkModeOn = useSelector(
    (state: RootState) => state.darkMode.isDarkModeOn
  );

  return (
    <div
      className={`shadow-md p-4 rounded-md h-full w-full border overflow-auto ${
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
      </style>
      <div>
        <div className="flex flex-col gap-4 mb-5">
          <h1 className="text-xl font-bold">About</h1>
          <p className="text-sm">
            Hello! I&apos;m Niranjan Raju, a passionate Front-End developer.From
            my early age I was so much passionate on web. I develop web
            applications, I also have experience working with Reactjs and Next
            js. Able to do any web and programming related task by handling
            difficulties smoothly in any given time. Have a reasonable skill on
            Front-End development.
            <br />
            <br />A skilled Front-End developer, brings a lifelong passion for
            web development to every project. With expertise in React.js and
            Next.js, he navigates challenges seamlessly, delivering exceptional
            web solutions with finesse and efficiency.
          </p>
        </div>
        <div>
          <h1 className="font-medium">What I Do!</h1>
          <div className="grid grid-cols-2 my-5 gap-4">
            {AboutCardData.map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 p-4 rounded-md shadow-md border transition-colors duration-300 ${
                  isDarkModeOn
                    ? "bg-white text-black"
                    : "bg-slate-800 text-white"
                }`}>
                <div className="basis-[10%] text-green-500 text-3xl">
                  <FaCode />
                </div>
                <div className="basis-4/5">
                  <h1 className="font-medium">{item.title}</h1>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
