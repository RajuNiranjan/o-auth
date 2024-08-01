import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [registerFormData, setRegisterFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setRegisterFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/auth/register", registerFormData);
      const data = res.data;
      console.log("register form data", data);
      setRegisterFormData({
        userName: "",
        email: "",
        password: "",
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded-lg shadow-lg flex flex-col gap-4"
      >
        <h1 className="text-center font-bold text-2xl">Register</h1>

        <div className="flex flex-col">
          <label htmlFor="userName">
            User Name <small className="text-red-500">*</small>
          </label>
          <input
            type="text"
            id="userName"
            value={registerFormData.userName}
            onChange={handleChange}
            className="focus:outline-none border p-3 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">
            Email <small className="text-red-500">*</small>
          </label>
          <input
            type="email"
            id="email"
            value={registerFormData.email}
            onChange={handleChange}
            className="focus:outline-none border p-3 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">
            Password <small className="text-red-500">*</small>
          </label>
          <input
            type="password"
            id="password"
            value={registerFormData.password}
            onChange={handleChange}
            className="focus:outline-none border p-3 rounded-lg"
          />
        </div>
        {error && <small className="text-red-500 text-center">{error}</small>}
        <button
          type="submit"
          className="bg-blue-500 w-full p-3 rounded-lg text-white font-bold  text-xl"
        >
          Submit
        </button>

        <small className="text-center">
          already have an account ?{" "}
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </small>
      </form>
    </div>
  );
};

export default Register;
