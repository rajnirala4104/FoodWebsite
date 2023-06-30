import React, { useEffect, useState } from "react";
import { filterFoodItems } from "../api/services";
import { useParams } from "react-router-dom";
import { DishesCard } from "../components/DishesCard";

export const FoodSingleCategory = () => {
  const [foods, setFoods] = useState([]);
  const categoryPathname = useParams();

  const fetchFood = async () => {
    const foodData = await filterFoodItems(categoryPathname.categoryName);
    setFoods(foodData.data);
  };
    console.log(foods.meals);
  useEffect(() => {
    fetchFood();
  }, []);

  if (foods.meals === undefined) {
    console.log("meal is undefine so that's why we able to iterate.");
  } else {
    return (
      <>
        <section className="mealContainer">
          {foods.meals.map((food) => (
            <DishesCard
              dishName={food.strMeal}
              key={food.idMeal}
              dishImage={food.strMealThumb}
            />
          ))}
        </section>
      </>
    );
  }
};
