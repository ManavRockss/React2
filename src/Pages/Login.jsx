import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const Login = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, logIn } = userAuth();
  const navigate = useNavigate();

  const handleFormSumbmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />
        <img
          className="hidden sm:block absolute w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="///"
        />

        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/80 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-nsans-bold">Log In</h1>
              <form
                onSubmit={handleFormSumbmit}
                className="w-full flex flex-col py4"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded-lg"
                  type="email"
                  placeholder="Enter your Email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded-lg"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-red-500 font-nsans-bold py-3 my-6 rounded-lg hover:bg-red-700">
                  Log In
                </button>
                <div className="flex justify-left items-center text-white">
                  <p>
                    <input
                      type="checkbox"
                      className="mr-2 "
                      checked={rememberLogin}
                      onChange={(e) => setRememberLogin(!rememberLogin)}
                    />
                    Remember me
                  </p>
                  <p className="m-6">Need Help?</p>
                </div>
                <p className="my-4">
                  <span className="text-white mr-2">New to Netflix?</span>
                  <Link to="/login" className="hover:bg-red-600 rounded-lg">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
