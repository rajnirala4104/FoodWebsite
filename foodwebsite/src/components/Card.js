import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <>
      <Link to={`/food/${props.category}`} className="card my-3 text-dark" style={{width:"18rem"}}>
        <img src={props.cardImage} loading="lazy" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.category}</h5>
        </div>
      </Link>
    </>
  );
};
