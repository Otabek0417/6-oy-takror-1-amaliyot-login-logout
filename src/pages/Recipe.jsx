import React from "react";
import { useParams } from "react-router-dom";
import { useDoc } from "../hooks/useDoc";
import Slider from "../pages/Slider";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function Recipe() {
  const { id } = useParams();
  const { error, isPending, recipe } = useDoc(id);
  console.log(recipe);
  return (
    <div className="pb-5 pt-5 md:mt-20 ">
      {isPending && <h1>Loading...</h1>}
      <div
        href="#"
        class="mm:flex-row flex flex-col items-center gap-7 rounded-lg border border-gray-200 bg-white p-4 shadow  dark:border-gray-700 dark:bg-gray-800  md:flex-row md:p-6"
      >
        <Slider recipe={recipe} />
        <div class="flex flex-col justify-between  leading-normal">
          <h5 class="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:mb-4 md:text-3xl">
            {recipe && recipe.title}
          </h5>
          <span className="mb-0 text-lg  font-bold text-gray-700 dark:text-gray-400 md:mb-2">
            Ingredients:
          </span>
          <span className="mb-0 text-gray-700 dark:text-gray-400 md:mb-4  ">
            {recipe && recipe.ingredients.join(",")}
          </span>
          <span className="mb-0 text-lg font-bold text-gray-700 dark:text-gray-400 md:mb-2 ">
            Method:
          </span>
          <span className="line-clamp-3 text-gray-700 dark:text-gray-400 md:line-clamp-none ">
            {recipe && recipe.method}
          </span>
          <span className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
            CookingTime:{" "}
            <span className="text-base font-normal">
              {recipe && recipe.cookingTime}
            </span>
          </span>
          <Link to={"/"}>
            <div className="flex flex-col items-end">
              <button class=" focus:shadow-outline-blue flex w-[100px] items-center gap-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none active:bg-blue-800">
                <MdOutlineKeyboardBackspace />
                Home
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
