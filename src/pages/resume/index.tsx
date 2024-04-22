import { RootState } from "@/redux/types/DarkModeType";
import React from "react";
import { GrBriefcase } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";
import { useSelector } from "react-redux";

const educationDetails = [
  {
    years: "Aug 2019 - June 2023",
    collegeName: "Jawaharlal Nehru Technological University Kakinada.",
    department: "Electrical and Electronics Engineering",
    place: "Guntur, Andhra Pradesh.",
    bgColor: "blue",
  },
  {
    years: "June 2017 - April 2029",
    collegeName: "Sri Gayatri Junior College",
    department: "PMC",
    place: "Guntur, Andhra Pradesh.",
    bgColor: "red",
  },
  {
    years: "Aug 2019 - June 2023",
    collegeName: "Naveena High School",
    // department: "Electrical and Electronics Engineering",
    place: "Guntur, Andhra Pradesh.",
    bgColor: "green",
  },
];

const experienceDetails = [
  {
    years: "April 2024 - Present",
    collegeName: "Flying Fox Labs PVTL",
    department: "Software Developer",
    type: "Full Time",
    bgColor: "red",
  },
  {
    years: "Jan 2024 - Apr 2024",
    collegeName: "Thumbstack Technologies",
    department: "Front End Developer",
    type: "Internship",
    bgColor: "green",
  },
  {
    years: "Oct 2023 - Jan 2024",
    collegeName: "Klub Stack",
    department: "Front End Developer",
    type: "Internship",
    bgColor: "blue",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React JS",
  "Next JS",
  "Exprss JS",
  "MongoDB",
  "SQL",
];

const Resume = () => {
  const isDarkModeOn = useSelector(
    (state: RootState) => state.darkMode.isDarkModeOn
  );
  return (
    <div
      className={`shadow-md p-4 rounded-md h-full border w-full overflow-y-auto ${
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
        <h1 className="text-xl font-bold sticky top-0 scroll-m-0 backdrop-blur-md p-5 rounded-full">
          Resume
        </h1>

        <div className="my-5 grid grid-cols-2 gap-4">
          <div>
            <h1 className="flex items-center font-medium gap-2">
              {" "}
              <span className="text-blue-500 text-xl ">
                <PiStudent />
              </span>{" "}
              Education
            </h1>
            <div className="my-5 flex flex-col gap-4">
              {educationDetails.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    isDarkModeOn
                      ? "bg-white text-black"
                      : "bg-white text-black "
                  } border rounded-md p-4 shadow-md h-32`}>
                  <small>{item.years}</small>
                  <h1 className="font-medium">{item.collegeName}</h1>
                  <p>{item.department}</p>
                  <small>{item.place}</small>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="flex items-center font-medium gap-2">
              {" "}
              <span className="text-blue-500 text-xl">
                <GrBriefcase />
              </span>{" "}
              Experience
            </h1>
            <div className="my-5 flex flex-col gap-4">
              {experienceDetails.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    isDarkModeOn
                      ? "bg-white text-black"
                      : "bg-white text-black "
                  } border rounded-md p-4 shadow-md h-32`}>
                  <small>{item.years}</small>
                  <h1 className="font-medium">{item.collegeName}</h1>
                  <p className="text-lg font-medium text-gray-500">
                    {item.department} / <small>{item.type}</small>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h1 className=" font-medium">Skills</h1>
          <div className="flex gap-4 flex-wrap my-2">
            {skills.map((item, index) => (
              <h1
                key={index}
                className={`bg-gray-300 w-max  rounded-sm px-2 ${
                  isDarkModeOn
                    ? "bg-black text-black"
                    : "bg-gray-100 text-black"
                } transition-all duration-500 `}>
                {item}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
