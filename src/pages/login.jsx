import axios from "axios";
import { authFailure, authStart, authSuccess } from "../redux/Actions/user";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logInFormData, setLogInFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

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
      navigate("/profile");
    } catch (error) {
      console.log(error);
      dispatch(authFailure(error));
      setError(error.response.data.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded-lg shadow-lg flex flex-col gap-4 w-[450px] bg-white">
        <h1 className="text-center font-bold text-2xl">Log In</h1>
        <div className="flex flex-col">
          <label htmlFor="email">
            Email <small className="text-red-500">*</small>
          </label>
          <input
            type="email"
            id="email"
            value={logInFormData.email}
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
            value={logInFormData.password}
            onChange={handleChange}
            className="focus:outline-none border p-3 rounded-lg"
          />
        </div>
        {error && <small className="text-red-500 text-center">{error}</small>}
        <button
          type="submit"
          className="bg-blue-500 w-full p-3 rounded-lg text-white font-bold  text-xl">
          Submit
        </button>

        <small className="text-center">
          don't have an account ?{" "}
          <Link className="text-blue-500" to="/register">
            Register
          </Link>
        </small>
      </form>
    </div>
  );
};

export default LogIn;
