import React from "react";
import logo from "../../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container ">
      <hr className="m-0" />
      <div className="row py-4">
        <div className="col-md-3">
          <img src={logo} height={"60px"} alt="" />
          <p className="w-80 mt-2">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
        </div>
        <div className="col-md-3">
          <h3>Categories</h3>
          <ul>
            <li>
              <FaAngleRight className="text-success"></FaAngleRight> Breakfast
              Recipes
            </li>
            <li>
              <FaAngleRight className="text-success"></FaAngleRight> Lunch
              Recipes
            </li>
            <li>
              <FaAngleRight className="text-success"></FaAngleRight> Dinner
              Recipes
            </li>
            <li>
              <FaAngleRight className="text-success"></FaAngleRight> Drink
              Recipes
            </li>
            <li>
              <FaAngleRight className="text-success"></FaAngleRight> Appetizer &
              Snack
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>Learn More</h3>
          <ul>
            <li>
              <FaAngleRight className="text-success"></FaAngleRight> About us
            </li>
            <li>
              <FaAngleRight className="text-success"></FaAngleRight> Terms
            </li>
            <li>
              <FaAngleRight className="text-success"></FaAngleRight> Customers
            </li>
            <li>
              <FaAngleRight className="text-success"></FaAngleRight>
              Integrations
            </li>
            <li>
              <FaAngleRight className="text-success"></FaAngleRight> Advertise
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3>Get in connect</h3>
          <p>
            <FaAngleRight className="text-success"></FaAngleRight>Follow us
          </p>
          <div className="d-flex align-items-center social-icon gap-3">
            <Link to="https://www.facebook.com/">
              <FaFacebookF
                className="text-info"
                style={{ fontSize: "2rem" }}
              ></FaFacebookF>
            </Link>
            <Link to="https://www.youtube.com/">
              <FaYoutube
                className="text-danger"
                style={{ fontSize: "2rem" }}
              ></FaYoutube>
            </Link>
            <Link to="https://www.twitter.com/">
              <FaTwitter
                className="text-info"
                style={{ fontSize: "2rem" }}
              ></FaTwitter>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <p>@2023 The Wing-Stop Experts. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
