import React from "react";
import "./css/DishesCard.css";

export const DishesCard = (props) => {
  return (
    <>
      <div className="dishCard container bg-light">
        <div className="img">
          <img loading="lazy" src={props.dishImage} alt={props.dishName} />
        </div>
        <div className="aboutDish">
          <span>{props.dishName}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, rem.
          </p>
          <div>
            <button  className="btn btn-warning">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
