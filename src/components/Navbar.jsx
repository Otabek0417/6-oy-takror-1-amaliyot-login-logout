import React from "react";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="bg-neutral-200 py-3 md:py-5">
      <div className="max-container flex flex-col items-center md:flex-row md:justify-between">
        <a className="text-2xl font-medium mb-5 md:text-4xl md:mb-0" href="/">
          MyKitchen
        </a>
        <nav className="text-center md:flex md:items-center gap-3.5">
          <p className="mb-4 md:font-medium md:m-0 md:text-xl">
            Welcome,Otabek
          </p>
          <div className="flex gap-3 justify-center items-center">
            <Link to={"/login"}>
              <HiOutlineUserPlus className=" text-black text-2xl" />
            </Link>
            <button className=" px-2 py-1 bg-emerald-400 rounded-md text-white  md:px-3 md:py-2">
              create
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
