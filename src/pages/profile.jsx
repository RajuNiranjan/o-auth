import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authStart } from "../redux/Actions/user";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../fire_base";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const fileUploader = useRef(null);
  const [fileUploadError, setFileUploadError] = useState(false);

  const user = currentUser?.user;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileFormData, setProfileFormData] = useState({
    userName: user.userName,
    email: user.email,
    password: "",
    avatar: user.avatar,
  });

  const [filePerc, setFilePerc] = useState(0);

  const OnChangeText = (e) => {
    const { name, value } = e.target;
    setProfileFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        console.log(error);
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProfileFormData((prev) => ({
            ...prev,
            avatar: downloadURL,
          }));
        });
      }
    );
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

  const DeleteAccount = async () => {
    try {
      console.log(profileFormData);
      const res = await axios.delete(`/api/user/delteaccount/${user.id}`);
      const data = res.data;
      console.log(data);
      navigate("/login");
      dispatch(authStart());
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={onSubmitProfileForm}
        className="flex flex-col gap-4 border shadow-lg p-4 w-[450px] bg-white">
        <h1 className="text-center text-xl font-bold">Update Profile</h1>

        <div className="flex flex-col">
          <input
            type="file"
            hidden
            ref={fileUploader}
            onChange={onImageChange}
          />
          <img
            src={profileFormData.avatar}
            onClick={() => fileUploader.current.click()}
            alt="Profile"
            className="w-24 h-24 rounded-full items-center self-center cursor-pointer object-cover border "
          />
          <p className="text-sm self-center">
            {fileUploadError ? (
              <span className="text-red-700">
                Error Image upload (image must be less than 2 mb)
              </span>
            ) : filePerc > 0 && filePerc < 100 ? (
              <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
            ) : filePerc === 100 ? (
              <span className="text-green-700">
                Image successfully uploaded!
              </span>
            ) : (
              ""
            )}
          </p>
        </div>

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
          className="w-full p-4 rounded-lg bg-green-400 text-white font-bold">
          Update Profile
        </button>
        <div className="flex justify-between items-center">
          <button type="button" onClick={DeleteAccount}>
            Delete Account
          </button>
          <button type="button" onClick={LogOutAccount}>
            LogOut
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
