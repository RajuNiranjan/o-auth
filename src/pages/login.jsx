import axios from "axios";
import React, { useState } from "react";

const LogIn = () => {
  const [logInFormData, setLogInFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setLogInFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("api/auth/login", logInFormData);
    const data = res.data;
    console.log("register form data", data);
    setLogInFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded-lg shadow-lg flex flex-col gap-4"
      >
        <h1 className="text-center font-bold text-2xl">Register</h1>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={logInFormData.email}
            onChange={handleChange}
            className="focus:outline-none border p-3 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={logInFormData.password}
            onChange={handleChange}
            className="focus:outline-none border p-3 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 w-full p-3 rounded-lg text-white font-bold  text-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogIn;
