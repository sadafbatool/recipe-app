import React from "react";

// const getIngredients = (array /* , ingredientQty, detail */) => {
//   return array;
// };

const Ingredients = ({ detail }) => {
  const { strCategory, strMeal, strMealThumb, strInstructions } = detail;

  const objectKeys = Object.keys(detail);

  const ingredientItems = objectKeys.filter(
    (item) => item.includes("strIngredient") && detail[item]
  );

  console.log("fjslkdfjsdfsd", ingredientItems);
  return (
    <div className="light obl">
      <img className="meal" src={strMealThumb} alt={strMeal} />
      <div className="int">
        <h1>{strMeal}</h1>
        <h2>{strCategory}</h2>
        <h1 className="left">Ingredients :</h1>
        <div className="wrap">
          {ingredientItems.map((item, i) => (
            <div className="flex">
              <img
                src={`https://www.themealdb.com/images/ingredients/${detail[item]}-small.png`}
                alt={Image}
              />

              <h4 className="int">{`${detail[item]} :  ${
                detail["strMeasure" + (i + 1)] || ""
              }`}</h4>
            </div>
          ))}
        </div>
        <h1 className="left">Instructions :</h1>
        <p className="font">{strInstructions}</p>
      </div>
    </div>
  );
};

export default Ingredients;
