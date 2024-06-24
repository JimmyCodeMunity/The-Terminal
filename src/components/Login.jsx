import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      id="loginsectio"
      className="h-[80vh] w-full flex justify-center items-center"
    >
      <div className="justify-center items-center space-y-6 newcard p-8 rounded-2xl shadow shadow-gray-100 shadow-lg">
        <div className="text-center">
          <h1 className="text-white text-2xl font-poppins">SignIn</h1>
          <p className="text-slate-400 mx-auto">Enter your email and password to continue.</p>
        </div>

        <div>
          <input
            type="text"
            className="h-10 w-full px-4 rounded-xl"
            placeholder="enter email"
          />
        </div>
        <div>
          <input
            type="text"
            className="h-10 w-full px-4 rounded-xl"
            placeholder="enter password"
          />
        </div>
        <div>
          <button
            type="submit"
            className="h-10 w-80 rounded-md bg-secondary justify-center items-center"
          >
            Sign In
          </button>
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-white"></p>
          </div>
          <div>
            <Link className="text-blue-200">Forgot password</Link>
          </div>
        </div>
        <div className="text-center">
          <p className="text-slate-300 font-poppins">Dont have an account?</p>
          <p className="text-secondary font-poppins">Create account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
