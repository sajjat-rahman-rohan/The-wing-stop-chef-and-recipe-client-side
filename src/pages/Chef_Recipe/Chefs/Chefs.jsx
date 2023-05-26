import React, { useState } from "react";
import Recipe from "../Recipe/Recipe";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import "./Chef.css";
import LazyLoad from "react-lazy-load";

const Chefs = () => {
  const chefandrecipe = useLoaderData();
  console.log(chefandrecipe);
  const {
    id,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    chef_img_thumbnail,
    Description,
    like,
  } = chefandrecipe;

  const [count, setCount] = useState(like);

  return (
    <div className="container">
      <h2 className="text-center my-5">Chef ID : {chefandrecipe.id}</h2>
      <Card>
        <Row>
          <Col lg={6}>
            <Card.Body>
              <LazyLoad>
                <Card.Img
                  variant="top"
                  src={chef_img_thumbnail}
                  height={"400px"}
                  className="chef-img"
                />
              </LazyLoad>
            </Card.Body>
          </Col>
          <Col lg={6} className="m-auto">
            <Card.Body>
              <h3 className="py-1">Name : {chefName}</h3>
              <Card.Text>
                <b>Description :</b> {Description}
              </Card.Text>
              <p>
                <b>Year Of Experience :</b> {yearsOfExperience} years
              </p>
              <p>
                <b>Number Of Recipes :</b> {numberOfRecipes}
              </p>
              <p></p>
              <button
                onClick={() => setCount((count) => count + 1)}
                style={{ border: "none", padding: "5px 10px" }}
              >
                <AiFillLike className="text-info"></AiFillLike> <b>Liked:- </b>
                {count}
              </button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <h2 className="text-center mt-4 py-4">
        <b>{chefName}</b> Special Recipes
      </h2>
      <div className="row g-4 pb-5 mb-5">
        {chefandrecipe.recipe.map((recipe) => (
          <Recipe key={recipe.recipeId} recipe={recipe}></Recipe>
        ))}
      </div>
      <div className="text-center my-4  pb-5">
        <Link to={`/chefrecipe`}>
          <Button variant="success" className="px-4 py-2">
            <FaArrowLeft></FaArrowLeft> Back to all Chef
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Chefs;
