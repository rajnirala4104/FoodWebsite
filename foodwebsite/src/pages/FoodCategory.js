import React, { useEffect, useState } from "react";
import { getFoodCategories } from "../api/services";
import { Card } from "../components/Card";
import "./css/FoodCategory.css";

export const FoodCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    const response = await getFoodCategories();
    setCategories(response.data.categories);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  console.log(categories)

  if (loading) {
    return (
      <section className="container loadingSection w-100 h-100">
        <div className="container center display-4">fetching.....</div>
      </section>
    );
  }
  return (
    <>
      <section className="categorySection">
        {categories.map((category) => (
          <Card
            key={category.idCategory}
            category={category.strCategory}
            cardImage={category.strCategoryThumb}
          />
        ))}
      </section>
    </>
  );
};
