import React from "react";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import "./Recipe.css";

export default function Recipes({ recipes }) {
  return (
    <>
      {!recipes.length ? (
        <div className="spinner-container">
          <FaSpinner className="spinner" />
        </div>
      ) : (
        recipes.map((recipe, index) => (
          <div className="recipe-container">
            <h2>
              <Link to={`/recipe/${index}`}> {recipe.recipe.label} </Link>
            </h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.title} />
            <p>Calories {recipe.recipe.calories}</p>
            <h3>Ingredients</h3>

            <ul>
              {recipe.recipe.ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </>
  );
}
