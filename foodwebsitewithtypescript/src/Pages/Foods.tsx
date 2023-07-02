import { useParams } from "react-router-dom";
import { getFilteredFoodsItems } from "../api/services";
import { useEffect, useState } from "react";

interface Meals {
  strMeal: string;
  strMealThum: string;
  idMeal: string;
}

export const Foods = () => {
  const foodCategory = useParams();
  const [filteredFood, setfilteredFood] = useState<Meals[]>([]);

  const path = foodCategory.catname;

  const fetchFoods = async () => {
    const response = await getFilteredFoodsItems(path);
    const responseArr: Meals[] = [];
    responseArr.push(response.data.meals);
    setfilteredFood(responseArr);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  console.log(filteredFood);
  
  return (
    <>
      <h1>Foods</h1>
      {filteredFood.map((dataDic) =>{
        <h2>{dataDic.strMeal}</h2>
      })}
    </>
  );
};
