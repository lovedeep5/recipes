import React from "react";
import "./Recipe.css";

export default function Recipes({ ingredients, title, image, calories }) {
 
  return (
    <div className="recipe-container">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>Calories {calories}</p>
      <h3>Ingredients</h3>

      <ul>
        {ingredients.map(ingredient => (
          <li>{ ingredient.text}</li>
        ))}
        
      </ul>
      
    </div>
  );
}
