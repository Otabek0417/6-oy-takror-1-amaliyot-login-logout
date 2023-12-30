import { useState, useEffect } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Navbar() {
  const { user, spinner } = useGlobalContext();
  const [isPending, setIspending] = useState(false);
  const handleLogout = () => {
    setIspending(true);
    signOut(auth)
      .then(() => {
        setIspending(false);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : [],
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    console.log(localTheme);
    document.querySelector("html").setAttribute("class", localTheme);
  }, [theme]);

  const handleChange = (e) => {
    console.log(e);
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <header className="bg-neutral-200 py-3 dark:bg-slate-700 md:py-5">
      <div className="max-container flex flex-col items-center md:flex-row md:justify-between">
        <a
          className="animaton animation mb-5 text-2xl font-medium hover:opacity-70 active:opacity-50 dark:text-slate-200 md:mb-0 md:text-4xl"
          href="/"
        >
          MyKitchen
        </a>
        <nav className="gap-3.5 text-center md:flex md:items-center">
          <p className="mb-4 dark:text-slate-200 md:m-0 md:text-xl md:font-medium">
            Welcome,{" "}
            <span className="text-sky-500 dark:text-lime-300">
              {user.displayName}
            </span>
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => handleLogout()}
              className="animation rounded-md bg-red-500 px-2 py-1  text-white hover:bg-red-400 md:px-3 md:py-2 "
            >
              <div className="animation flex items-center gap-2">
                {isPending ? spinner() : ""} logaut
              </div>
            </button>
            <Link to={"create"}>
              <button className=" animation rounded-md bg-emerald-400 px-2 py-1  text-white hover:bg-emerald-300 md:px-3 md:py-2">
                create
              </button>
            </Link>
            <input
              type="checkbox"
              onChange={handleChange}
              checked={theme === "dark" ? true : false}
            />
            
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
