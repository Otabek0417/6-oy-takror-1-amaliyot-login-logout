import React from "react";
import { useCollection } from "../hooks/useCollection";
import Recipes from "../components/Recipes";

function Home() {
  const { documents: recipies, isPending, error } = useCollection("resipies");
  console.log(isPending);
  return (
    <div className="max-container">
      {isPending && <h1 className="text-white">Loading...</h1>}
      <Recipes recipies={recipies} />
    </div>
  );
}

export default Home;
