import React from "react";
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
  const [loading, setLoading] = useState<boolean>(false);
  const path = foodCategory.catname;

  const fetchFoods = async () => {
    setLoading(true);
    const response = await getFilteredFoodsItems(path);
    if (response.data && response.data.meals.length > 0) {
      const responseArr = [...response.data.meals];
      setfilteredFood(responseArr);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  if(loading){
    return (
      <div className="container display-4 text-secondary my-5 py-2" >
        loading...
      </div>
    )
  }

  return (
    <>
      <h1>Foods</h1>
      {filteredFood.map((dataDic) => (
        <React.Fragment key={dataDic.idMeal}>
          <h2>{dataDic.strMeal}</h2>
        </React.Fragment>
      ))}
    </>
  );
};
