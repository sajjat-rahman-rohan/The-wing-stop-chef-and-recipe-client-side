// import moment from "moment";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefCard = ({ chef }) => {
  const {
    id,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    chef_img_thumbnail,
    Description,
    like,
  } = chef;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card">
        <LazyLoad>
          <img
            src={chef_img_thumbnail}
            className="card-img-top"
            height={"300px"}
            alt="..."
          />
        </LazyLoad>
        <div className="card-body">
          <h3>{chefName}</h3>
          <p className="card-text">{Description.slice(0, 100)}...</p>
          <p>
            <b>Year Of Experience :</b> {yearsOfExperience} years
          </p>
          <p>
            <b>Number Of Recipes :</b> {numberOfRecipes}
          </p>
          <p>
            <b>Like:-</b> {like}
          </p>
          <Link to={`/chefrecipe/${id}`}>
            <Button variant="success" className="px-4 py-2">
              View Recipes and Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
