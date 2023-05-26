import React from "react";
import "./Food.css";
import LazyLoad from "react-lazy-load";

const Food = () => {
  return (
    <div className="py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 text-md-center m-auto food-img">
            <LazyLoad>
              <img src="https://i.ibb.co/ns4xfsr/sin-recpie-img.jpg" alt="" />
            </LazyLoad>
          </div>
          <div className="col-lg-7 text-lg-start text-md-center m-auto">
            <h2>
              TODAY RECIPES We Invite You To The Restaurant. Delicious Taste of
              Chicken Kebabs with Roasted Red Onions.
            </h2>
            <p className="py-3">
              Standardized Recipes - Customized house recipes that include
              ingredients, precise quantities, detailed steps, portion sizes,
              and recipe yield. Some may include food cost information and
              required tools. Standardized recipes are often for large
              quantities of prepared food. Standardized recipes are important to
              foodservice operations because they provide consistency and
              uniformity in quality, yield, and food cost. Standardized recipes
              include information on quantity, yield, portion size, ingredients,
              portion cost, and menu price.
            </p>
            <button className="food-btn" type="submit">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
