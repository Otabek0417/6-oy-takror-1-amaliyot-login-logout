import React from "react";

function SignUp() {
  return (
    <form className="w-full max-w-[400px] bg-neutral-100 rounded-[20px] mx-auto mt-8">
      <div className="p-[32px]">
        <h1 className="text-[32px] text-gray-900 mb-10">SignUp</h1>
        <label
          className="block text-base mb-2 text-gray-900 font-medium "
          htmlFor="email"
        >
          Your name
        </label>
        <input
          className=" w-full mb-6  outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5   "
          type="text"
          id="email"
          autoComplete="off"
          required
        />
        <label
          className="block text-base mb-2 text-gray-900 font-medium "
          htmlFor="email"
        >
          Email
        </label>
        <input
          className=" w-full mb-6  outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "
          type="email"
          id="email"
          autoComplete="off"
          required
        />
        <label
          className="block text-base mb-2 text-gray-900 font-medium "
          htmlFor="password"
        >
          Password
        </label>
        <input
          className=" w-full mb-6  outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5   "
          type="password"
          id="password"

        />
        <button className="bg-blue-700 py-[14px] w-full rounded-lg text-white font-light text-[15px] mb-6">
          Login to your account
        </button>
      </div>
    </form>
  );
}

export default SignUp;
