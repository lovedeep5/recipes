import React, { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
const SingleRecipe = ({ recipes }) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const setSingleRecipe = (index) => {
      setRecipe(recipes[index]);
    };
    setSingleRecipe(id);
  }, [id, setRecipe, recipes]);

  return (
    <div>
      <h2>{recipe?.recipe?.label}</h2>
      <div className="image-container">
        <img src={recipe?.recipe?.image} alt="recipe" />
      </div>
    </div>
  );
};

export default memo(SingleRecipe);
