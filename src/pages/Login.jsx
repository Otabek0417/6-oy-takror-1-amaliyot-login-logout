import React from "react";
import { Link } from "react-router-dom";
import LoginVideo from "../videos/login-video.mp4";
function Login() {
  return (
    <div className="relative grid h-screen place-items-center">
      <video
        className="absolute z-[-1] h-screen w-screen object-cover"
        src={LoginVideo}
        muted
        autoPlay
        loop
      ></video>

      <div className="  grid h-screen w-full place-items-center bg-black bg-opacity-50">
        <form className="mx-auto mt-8 w-full max-w-[400px] rounded-[20px] bg-neutral-100 bg-opacity-25">
          <div className="p-[32px]">
            <h1 className="mb-10 text-[32px] text-gray-900">Login</h1>
            <label
              className="mb-2 block text-base font-medium text-gray-900 "
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className=" mb-6 block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 focus:border-blue-500  focus:ring-blue-500   "
              type="email"
              id="email"
              autoComplete="off"
              required
            />
            <label
              className="mb-2 block text-base font-medium text-gray-900 "
              htmlFor="password"
            >
              Email address
            </label>
            <input
              className=" mb-6 block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 focus:border-blue-500  focus:ring-blue-500   "
              type="password"
              id="password"
              autoComplete="off"
              required
            />
            <button className="mb-6 w-full rounded-lg bg-blue-700 py-[14px] text-[15px] font-light text-white">
              Login to your account
            </button>
            <div className="flex justify-center  gap-2">
              <span className="text-gray-900 ">Don’t have an account?</span>
              <Link to={"/signup"}>
                <button className="text-sky-600">Sign Up</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
