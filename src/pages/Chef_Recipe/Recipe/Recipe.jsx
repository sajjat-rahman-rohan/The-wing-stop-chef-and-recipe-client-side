import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const Recipe = ({ recipe }) => {
  const [fold, setFold] = useState(true);

  const {
    recipeId,
    recipeName,
    ingredients,
    recipe_img,
    rating,
    cookingMethod,
  } = recipe;
  console.log(recipe);

  const handleFavbtn = (event) => {
    event.currentTarget.disabled = true;
    console.log("button clicked");
    toast.success("Added Favorite success! 👍", { autoClose: 500 });
  };

  return (
    <div className="col-lg-4 col-md-6">
      <div className="card">
        <LazyLoad>
          <img
            src={recipe_img}
            className="card-img-top"
            height={"300px"}
            alt="..."
          />
        </LazyLoad>
        <div className="card-body">
          <h5 className="card-title">
            <b> Recipe Name :</b>
            {recipeName}
          </h5>
          <p className="m-0">
            <b>Ingredients :</b>
          </p>
          {ingredients.map((int) => (
            <li>{int}</li>
          ))}
          <div className="flex-grow-1 d-flex align-items-center">
            <Rating style={{ maxWidth: 100 }} value={4.5} readOnly />
            <span className="m-1">{rating}</span>
          </div>
          <hr className="p-1 m-0  mt-2" />
          <div className="mb-3">
            <b> CookingMethod :</b>
            {fold ? (
              <>
                <p className="m-0">
                  {cookingMethod.substring(0, 100)}
                  .....
                </p>
                <small
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => setFold(!fold)}
                >
                  Read More
                </small>
              </>
            ) : (
              <>
                <p className="m-0">{cookingMethod}.....</p>
                <small
                  style={{ cursor: "pointer", color: "black" }}
                  onClick={() => setFold(!fold)}
                >
                  Read Less
                </small>
              </>
            )}
          </div>

          <Button onClick={handleFavbtn}>
            Favorite <FaHeart></FaHeart>
          </Button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
