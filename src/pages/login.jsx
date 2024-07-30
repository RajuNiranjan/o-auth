import axios from "axios";
import { authFailure, authStart, authSuccess } from "../redux/Actions/user";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();

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
    dispatch(authStart());
    try {
      const res = await axios.post("api/auth/login", logInFormData);
      const data = res.data;
      dispatch(authSuccess(data));
      setLogInFormData({
        email: "",
        password: "",
      });
      navigate("/listing");
    } catch (error) {
      console.log(error);
      dispatch(authFailure());
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
