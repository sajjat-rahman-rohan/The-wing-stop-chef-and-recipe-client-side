import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const AllChefCard = () => {
  const [chefData, setchefData] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a10-chef-recipe-hunter-server-sajjat-rahman-rohan.vercel.app/allData"
    )
      .then((result) => result.json())
      .then((data) => setchefData(data));
  }, []);
  console.log(chefData);

  return (
    <div className="container">
      <h2 className="text-center my-5 pt-5">USA Top {chefData.length} Chef</h2>
      <div className="row g-4 pb-5 mb-5">
        {chefData.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default AllChefCard;
