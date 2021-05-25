import React from "react";
import "./Recipe.css";

export default function Recipes({ title, image, calories }) {
  return (
    <div className="recipe-container">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>Calories {calories}</p>
    </div>
  );
}
