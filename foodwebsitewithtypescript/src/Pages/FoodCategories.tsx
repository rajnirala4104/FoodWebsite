import React from "react";
import { useEffect, useState } from "react";
import { getFoodCategories } from "../api/services";
import { Card } from "../Components/Card";
import "./css/FoodCategory.css";

interface FoodDataType {
  idCateory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

export const FoodCategories = () => {
  const [fetchedData, setFetchedData] = useState<FoodDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetched = async () => {
    setLoading(true);
    const response = await getFoodCategories();
    if (response.data.categories.length > 0) {
      const responseDataDic = [...response.data.categories];
      setFetchedData(responseDataDic);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetched();
  }, []);

  // console.log(fetchedData);

  if (loading) {
    return (
      <div className="loadingDiv p-3 display-3 text-secondary">fetching..</div>
    );
  }
  return (
    <section className="container catCardContainer">
      {fetchedData.map((detailDic, i) => (
        <React.Fragment key={i}>
          <Card
            idCategory={detailDic.idCateory}
            strCategory={detailDic.strCategory}
            strCategoryDescription={detailDic.strCategoryDescription}
            strThumb={detailDic.strCategoryThumb}
          />
        </React.Fragment>
      ))}
    </section>
  );
};
