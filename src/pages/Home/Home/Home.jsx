import React from "react";
import Banner from "../Banner/Banner";
import AllChefCard from "../AllChefCrad/AllChefCard";
import Food from "../Food/Food";
import Countup from "../Countup/Countup";
import GetInTouch from "../GetInTouch/GetInTouch";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllChefCard></AllChefCard>
      <Food></Food>
      <Countup></Countup>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
