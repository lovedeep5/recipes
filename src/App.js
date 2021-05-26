import React, { useEffect, useState } from 'react';
import Recipes from './Recipes';
import './App';


function App() {

  const APP_ID = "dff5111d";
  const APP_KEY = "133a1773ca08d0eb236157e3e092b5f3";
  // const requestSample = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}";
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Banana")
  
  const setInput = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    
    async function fetchData() {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits);
    }
    fetchData();
    
  }, [query])


  const searchRecipe = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (    
    <div className="App">
      <div className="search-container">
        <form onSubmit={searchRecipe}>
          <div className="form-inputs">
          <input type="text" value={search} onChange={setInput} required placeholder="Type and hit search for more recipes..."/>
          <button type="submit">Search</button></div>
        </form>
      </div>
      
      <div className="recipes-container">
      {recipes.map(recipe => (
        <Recipes key={recipe.recipe.label} title={recipe.recipe.label} image={recipe.recipe.image} calories={ recipe.recipe.calories} ingredients={recipe.recipe.ingredients}/>
  ))}</div>
    </div>
  );
}

export default App;
