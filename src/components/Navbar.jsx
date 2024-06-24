import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = userAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    console.log("Button clicked!!");
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase font-nsans-bold text-red-500 text-5xl">
          netflix
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/profile">
            <button className="capitalize pr-4 hover:text-red-500 font-nsans-bold">
              profile
            </button>
          </Link>

          <button
            onClick={handleLogOut}
            className="capitalize pr-27px bg-red-600 cursor-pointer px-6 py-2 rounded hover:bg-red-800"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="capitalize pr-4 hover:text-red-500 font-nsans-bold">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="capitalize pr-27px bg-red-600 cursor-pointer px-6 py-2 rounded hover:bg-red-800">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
