import React from "react";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);

  const searcRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipe(data.meals);
    setIsLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searcRecipes();
  };
  useEffect(() => {
    searcRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <SearchBar
        handleSubmit={handleSubmit}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        isLoading={isLoading}
      />
      <div className="card wrap">
        {recipe
          ? recipe.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          : "No Recipes!"}
      </div>
    </div>
  );
};

export default Home;
