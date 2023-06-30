import React from "react";
import "./css/DishesCard.css";
import { Link, useParams } from "react-router-dom";

export const DishesCard = (props) => {
  const pathname = useParams()
  return (
    <>
      <div className="dishCard container bg-light">
        <div className="img">
          <img loading="lazy" className="img_fluid img-responsive" src={props.strMealThumb} alt={props.dishName} />
        </div>
        <div className="aboutDish">
          <span>{props.strMeal}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, rem.
          </p>
          <div>
            <Link to={`/food/${pathname.categoryName}/${props.strMeal}`}  className="btn btn-warning">Order Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};
