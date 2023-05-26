import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <div>
      <div className="container mb-5 pb-5">
        <div className="text-center py-5">
          <h1>Get In Touch</h1>
          <p>
            Standardized recipes are often for large quantities of prepared
            food. Standardized recipes are important.
          </p>
        </div>
        <div className="row gap-4 ">
          <div className="col-md-5 get-con m-auto">
            <img
              src="https://i.ibb.co/hBnvqYQ/emailsupport.png"
              height={"50px"}
              alt=""
            />
            <h2 className="py-2">Email Support</h2>
            <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur?
            </p>
            <ul>
              <li>
                <FaAngleRight className="text-success"></FaAngleRight> Customer
                support : support@yourdomain.tld
              </li>
              <li className="py-2">
                <FaAngleRight className="text-success"></FaAngleRight>{" "}
                Redections : hello@yourdomain.tld
              </li>
            </ul>
            <Link to={`/login`}>
              <Button className="p-2 px-4" variant="success">
                Learn more <FaArrowRight className="ms-2"></FaArrowRight>
              </Button>
            </Link>
          </div>
          <div className="col-md-5 get-con m-auto">
            <img
              src="https://i.ibb.co/0D89xsj/callcenter.png"
              height={"50px"}
              alt=""
            />
            <h2 className="py-2">Call Center</h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <ul typeof="square">
              <li>
                <FaAngleRight className="text-success"></FaAngleRight> Customer
                services : +(605) 886-6082
              </li>
              <li className="py-2">
                <FaAngleRight className="text-success"></FaAngleRight> Advertise
                : +(763) 420-6968
              </li>
            </ul>
            <Link to={`/login`}>
              <Button className="p-2 px-4" variant="success">
                Chat Now
                <FaFacebookMessenger className="ms-2"></FaFacebookMessenger>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
