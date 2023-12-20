import React from "react";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="bg-neutral-200 py-3 dark:bg-slate-700 md:py-5">
      <div className="max-container flex flex-col items-center md:flex-row md:justify-between">
        <a
          className="animaton mb-5 text-2xl font-medium hover:opacity-70 active:opacity-50 dark:text-slate-200 md:mb-0 md:text-4xl"
          href="/"
        >
          MyKitchen
        </a>
        <nav className="gap-3.5 text-center md:flex md:items-center">
          <p className="mb-4 dark:text-slate-200 md:m-0 md:text-xl md:font-medium">
            Welcome,Otabek
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link to={"/login"}>
              <HiOutlineUserPlus className=" text-2xl text-black dark:text-slate-200" />
            </Link>
            <button className=" rounded-md bg-emerald-400 px-2 py-1 text-white  md:px-3 md:py-2">
              create
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
