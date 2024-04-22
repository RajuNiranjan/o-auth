import { RootState } from "@/redux/types/DarkModeType";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useSelector } from "react-redux";

interface FormDataInterface {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [inputsData, setInputsData] = useState<FormDataInterface>({
    name: "",
    email: "",
    message: "",
  });

  const [formData, setFormData] = useState<FormDataInterface[]>([]);

  const isDarkModeOn = useSelector(
    (state: RootState) => state.darkMode.isDarkModeOn
  );

  const handleInputsChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData((prevFormData) => [...prevFormData, inputsData]); // Append the new data to formData
    console.log(formData); // This won't log the updated state due to asynchronous nature of setState
    setInputsData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className={`shadow-md p-4 rounded-md h-full w-full border ${
        isDarkModeOn ? "bg-black text-white" : "bg-white"
      } transition-all duration-500`}>
      <div>
        <h1 className="text-xl font-bold">Contact</h1>
        <div>
          <form
            className={`flex flex-col gap-4 bg-gray-100 rounded-md p-5 my-5 shadow-sm border ${
              isDarkModeOn ? "bg-black text-black" : "bg-white"
            } transition-all duration-500 `}
            onSubmit={handleSubmit}>
            <div>
              <h1 className="text-xl">
                I&apos;m Always Open To Discussing Product{" "}
                <strong>Design Work or Partnership</strong>
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputsData.name}
                onChange={handleInputsChange}
                className="outline-none border border-blue-300 rounded-md h-10 w-[50%] p-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={inputsData.email}
                onChange={handleInputsChange}
                className="outline-none border border-blue-300 rounded-md h-10 w-[50%]  p-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={inputsData.message}
                onChange={handleInputsChange}
                className="outline-none border border-blue-300 rounded-md h-28 resize-none  p-4"
              />
            </div>
            <div>
              <button
                type="submit"
                className={`px-4 rounded-md shadow-md font-medium uppercase py-2 ${
                  isDarkModeOn
                    ? "bg-black text-white"
                    : "bg-blue-500 text-white"
                }`}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
