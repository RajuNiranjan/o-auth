import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authStart } from "../redux/Actions/user";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const user = currentUser?.user;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileFormData, setProfileFormData] = useState({
    userName: user.userName,
    email: user.email,
    password: "",
  });

  const OnChangeText = (e) => {
    const { name, value } = e.target;
    setProfileFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitProfileForm = async (e) => {
    e.preventDefault();
    try {
      const userId = user.id;
      const res = await axios.post(
        `/api/user/updateuser/${userId}`,
        profileFormData
      );
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log(profileFormData);
    setProfileFormData({
      userName: user.userName,
      email: user.email,
      password: "",
    });
  };

  const LogOutAccount = async () => {
    try {
      const res = await axios.get("/api/auth/logout");
      const data = res.data;
      dispatch(authStart());
      localStorage.clear();
      console.log(data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={onSubmitProfileForm}
        className="flex flex-col gap-4 border shadow-lg p-4"
      >
        <h1 className="text-center text-xl font-bold">Update Profile</h1>
        <div className="flex flex-col">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={profileFormData.userName}
            onChange={OnChangeText}
            className="p-3 rounded-lg border focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={profileFormData.email}
            onChange={OnChangeText}
            className="p-3 rounded-lg border focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={profileFormData.password}
            onChange={OnChangeText}
            className="p-3 rounded-lg border focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full p-4 rounded-lg bg-green-400 text-white font-bold"
        >
          Update Profile
        </button>
        <button type="button" onClick={LogOutAccount}>
          LogOut
        </button>
      </form>
    </div>
  );
};

export default Profile;
