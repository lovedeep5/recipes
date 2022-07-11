import React, { useEffect, useState, memo } from "react";
import { Routes, Route } from "react-router-dom";
import Recipes from "./Recipes";
import "./App";
import SingleRecipe from "./SingleRecipe";

function App() {
  const APP_ID = process.env.REACT_APP_EDMAM_ID;
  const APP_KEY = process.env.REACT_APP_EDMAM_KEY;
  // const requestSample = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}";
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Banana");

  const setInput = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    }
    fetchData();
  }, [query, APP_ID, APP_KEY]);

  const searchRecipe = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="search-container">
        <form onSubmit={searchRecipe}>
          <div className="form-inputs">
            <input
              type="text"
              value={search}
              onChange={setInput}
              required
              placeholder="Type and hit search for more recipes..."
            />
            <button type="submit">Search</button>
          </div>
        </form>
      </div>

      <div className="recipes-container">
        <Routes>
          <Route path="/" element={<Recipes recipes={recipes} />} />
          <Route
            path="/recipe/:id"
            element={<SingleRecipe recipes={recipes} />}
          />
          <Route path="*" element={<Recipes recipes={recipes} />} />
        </Routes>
      </div>
    </div>
  );
}

export default memo(App);
