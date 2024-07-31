import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const user = currentUser?.user;

  return (
    <nav className="flex justify-between items-center p-4 h-20 shadow-lg">
      <div>
        <h1>Authentication</h1>
      </div>
      <div className="flex gap-4 items-center ">
        <Link to="/">Home</Link>
        {user ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
