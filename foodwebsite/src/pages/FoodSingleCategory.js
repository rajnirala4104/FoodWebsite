import React, { useEffect, useState } from "react";
import { filterFoodItems } from "../api/services";
import { useParams } from "react-router-dom";
import { DishesCard } from "../components/DishesCard";

export const FoodSingleCategory = () => {
  const [foods, setFoods] = useState([]);
  const categoryPathname = useParams();
  const [loading, setLoading] = useState(false);

  const [userInputs, setUserInputs] = useState("");

  const fetchFood = async () => {
    setLoading(true);
    const foodDataResponse = await filterFoodItems(
      categoryPathname.categoryName
    );
    if (foodDataResponse.data && foodDataResponse.data.meals.length > 0) {
      setFoods(foodDataResponse.data.meals);
    }
    setLoading(false);
  };
  const _FOODNAMELIST = [];
  foods.forEach((dataDic) => _FOODNAMELIST.push(dataDic.strMeal));

  const [foodNameList, setFoodNameList] = useState(_FOODNAMELIST);

  useEffect(() => {
    setFoodNameList(
      _FOODNAMELIST.filter((foodName) => foodName.includes(userInputs))
    );
  }, [userInputs]);
  console.log(foodNameList);
  
  useEffect(() => {
    fetchFood();
  }, []);

  if (loading) {
    return (
      <div className="container text-center display-4 text-secondary my-5 py-4">
        loading...
      </div>
    );
  } else {
    if (foods === undefined) {
      console.log("meal is undefine so that's why we able to iterate.");
    } else {
      return (
        <>
          <section className="mealContainer">
            <div className="filterSection d-flex bg-warning">
              <div>
                <select name="" id="">
                  <option value="India">India</option>
                </select>
              </div>
              <div className="inputText">
                <input
                  type="text"
                  onChange={(e) => setUserInputs(e.target.value)}
                  placeholder="Search..."
                />
              </div>
              <div className="numOfOrder">
                <span>43</span>
              </div>
            </div>
            <div className="foodCardContainer">
              {foods.map((food) => (
                <DishesCard key={food.idMeal} {...food} />
              ))}
            </div>
          </section>
        </>
      );
    }
  }
};
