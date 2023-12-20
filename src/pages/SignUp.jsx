import React from "react";
import SignupVideo from "../videos/singup-video.mp4";
function SignUp() {
  return (
    <div
      className="relative h-screen
    "
    >
      <video
        className="absolute z-[-1] h-screen w-screen object-cover"
        src={SignupVideo}
        muted
        autoPlay
        loop
      ></video>
      <div className="grid h-screen w-full place-items-center bg-black bg-opacity-50">
        <form className=" w-full max-w-[400px] rounded-[20px] bg-slate-100 bg-opacity-30 ">
          <div className="p-[32px]">
            <h1 className="mb-10 text-[32px] text-gray-900">SignUp</h1>
            <label
              className="mb-2 block text-base font-medium text-gray-900 "
              htmlFor="email"
            >
              Your name
            </label>
            <input
              className="mb-6 block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0   focus:border-blue-500 focus:ring-blue-500"
              type="text"
              id="email"
              autoComplete="off"
              required
            />
            <label
              className="mb-2 block text-base font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className=" mb-6 block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 focus:border-blue-500  focus:ring-blue-500 "
              type="email"
              id="email"
              autoComplete="off"
              required
            />
            <label
              className="mb-2 block text-base font-medium text-gray-900 "
              htmlFor="password"
            >
              Password
            </label>
            <input
              className=" mb-6 block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 focus:border-blue-500  focus:ring-blue-500"
              type="password"
              id="password"
            />
            <button className="mb-6 w-full rounded-lg bg-blue-700 py-[14px] text-[15px] font-light text-white">
              Login to your account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
