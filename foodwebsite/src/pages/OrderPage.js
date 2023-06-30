import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFoodDataByNameOrBySearch } from "../api/services";
import "./css/OrderPage.css";

export const OrderPage = () => {
  const orderInInPath = useParams();
  console.log(orderInInPath.orderMeal);

  const [foodDetails, setFoodDetails] = useState([]);
  const fetchFoodDetails = async () => {
    const response = await getFoodDataByNameOrBySearch(orderInInPath.orderMeal);
    setFoodDetails(response.data.meals);
  };

  console.log(foodDetails);

  useEffect(() => {
    fetchFoodDetails();
  }, []);

  return (
    <>
      {foodDetails.map((detail) => {
        return (
          <section key={detail.idMeal} className="orderSection ">
            <div className="orderMealDetails ">
              <div className="cardImage">
                <img src={detail.strMealThumb} className="img_fluid img-responsive" alt={detail.strMeal} />
              </div>
              <div className="cardContent">
                <div className="cardName text-center">
                  <span>{detail.strMeal}</span> ({detail.strCategory})
                  <br />
                  from <span>{detail.strArea}</span>
                </div>
                <div>
                  <p className="mealDescription text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio consequatur dolorum molestias expedita esse corporis natus deleniti ad nisi itaque velit sequi architecto illo, similique excepturi reprehenderit, dolor atque modi!
                  </p>
                    
                </div>
                <div className="cardInstuction text-center" >
                  <h2>Instruction</h2>
                  <p className="mealInstuction text-justify p-3">
                  {detail.strInstructions}
                  </p>
                </div>
              </div>
            </div>
            <div className="paymentSection ">
              <h2>Payment Details</h2>
              <div className="paymentElements">
                <div className="form-group mx-sm-3 mb-2">
                  <input
                    type="number"
                    className="form-control"
                    id="cardNumber"
                    placeholder="Card Number"
                  />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="cardholdeName"
                    placeholder="Cardholder Name"
                  />
                </div>
                <div className="cardDateDetails">
                  <div className="form-group mx-sm-3 mb-2">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleNum"
                      placeholder="12"
                    />
                  </div>

                  <div className="form-group mx-sm-3 mb-2">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleYeat"
                      placeholder="2023"
                    />
                  </div>

                  <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="inputPassword2" className="sr-only">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="CVV"
                      placeholder="CVV"
                    />
                  </div>
                </div>
                <div className="paymentBtns">
                  <button onClick={()=>alert("Order Complete")} className="btn btn-warning mx-2">
                    Confirm and Pay $10
                  </button>
                  <button className="btn btn-outline-warning">Cancel</button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};
