import React, { useEffect, useId, useState } from "react";
import { filterFoodItems, getAreaList, getFoodDataByNameOrBySearch, getFoodItemByAreName } from "../api/services";
import { useParams } from "react-router-dom";
import { DishesCard } from "../components/DishesCard";

export const FoodSingleCategory = () => {
  const [foods, setFoods] = useState([]);
  const categoryPathname = useParams();
  const [loading, setLoading] = useState(false);
  const [userInputs, setUserInputs] = useState("");
  const [areList, setAreList] = useState([]);
  const [areaName, setAreaName] = useState("American")
  const [filtedFoodNameByAreName, setFiltedFoodNameByAreName] = useState([])

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

  const fetchAreList = async () => {
    const result = await getAreaList();
    setAreList(result.data.meals);
  };

  const fetchFoodByAreaName = async (areaKaNaam) => {
    const result = await getFoodItemByAreName(areaKaNaam)
    setFiltedFoodNameByAreName(result.data.meals)
  }

  useEffect(()=>{
    fetchFoodByAreaName(areaName)
  }, [areaName])

  useEffect(() => {
    fetchFood();
    fetchAreList();

  }, []);
  if (loading) {
    return (
      <div className="container text-center display-4 text-secondary my-5 py-4">
        loading...
      </div>
    );
  } else {
    if (foods.length > 0) {
      return (
        <>
          <section className="mealContainer">
            <div className="filterSection d-flex bg-warning">
              <div>
                <select onChange={(e) => setAreaName(e.target.value)}>
                  <option value="all">-- select --</option>
                  {areList.map((dataDic, i) => (
                    <option value={dataDic.strArea} key={i}>
                      {dataDic.strArea}
                    </option>
                  ))}
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
              {filtedFoodNameByAreName.map((food) => (
                <DishesCard key={food.idMeal} {...food} />
              ))}
            </div>
          </section>
        </>
      );
    } else {
      // console.log("meal is empty so that's why we able to iterate.");
      
    }
  }
};
