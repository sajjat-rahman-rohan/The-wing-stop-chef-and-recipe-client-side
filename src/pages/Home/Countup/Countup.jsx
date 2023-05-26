import React from "react";
import { CountUp } from "use-count-up";

const Countup = () => {
  return (
    <div className="bg-light py-5 my-5">
      <div className="container">
        <div className="row g-4 text-center">
          <div className="col-md-3 col-sm-4">
            <img src="https://i.ibb.co/mbvpLSp/icon-01.png" alt="" />
            <h2 className="counter pt-2">
              <CountUp isCounting end={98} duration={15} />
            </h2>
            <h5 className="text-secondary">HOT DISHES</h5>
          </div>
          <div className="col-md-3 col-sm-4">
            <img src="https://i.ibb.co/zQPwDMQ/icon-02.png" alt="" />
            <h2 className="counter pt-2">
              <CountUp isCounting end={76} duration={15} />
            </h2>
            <h5 className="text-secondary">DESERT</h5>
          </div>
          <div className="col-md-3 col-sm-4">
            <img src="https://i.ibb.co/dMCmK3d/icon-03.png" alt="" />
            <h2 className="counter pt-2">
              <CountUp isCounting end={182} duration={12} />
            </h2>
            <h5 className="text-secondary">VEGETARIAN</h5>
          </div>
          <div className="col-md-3 col-sm-4">
            <img src="https://i.ibb.co/DVNcMkm/icon-04.png" alt="" />
            <h2 className="counter pt-2">
              <CountUp isCounting end={44} duration={15} />
            </h2>
            <h5 className="text-secondary">DRINKS</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countup;
