import React, { useState } from "react";
import "../Style/Work.css";
import "./db";
import illustrationhero from "../Assets/illustration-hero (1).svg";
import iconmusic from "../Assets/icon-music (1).svg";
import backgroundimg from '../Assets/pattern-background-desktop (1).svg';

const Work = () => {
  const [planResult, setPlanResult] = useState({
    period: "Annual Plan",
    plan: 59.99,
    currency: "$",
    duration: "/year",
  });

  function getPlan() {
    let year = 12;
    if (planResult.period === "Annual Plan") {
      setPlanResult({
        period: "Monthly Plan",
        plan: Math.round(59.99 / year),
        currency: "$",
        duration: "/monthly",
      });
    } else {
      setPlanResult({
        period: "Annual Plan",
        plan: "$59.99/year",
      });
    }
  }
  return (
    <div className="body">
      <img src={backgroundimg} alt="" className="bg-pattern" />
      <div className="body-content">
        <img src={illustrationhero} alt="" className="img1" />
        <h2 className="summary">Order Summary</h2>
        <p className="summary-text">
          You can now listern to millions of songs, audio books, and podcasts on
          any device anywhere you like!
        </p>
        
            <div className="musicc">
              <img src={iconmusic} alt="" className="music-logo" />
              <h5>
                {planResult.period} <br />
                <span className="den">
                  {planResult.currency}
                  {planResult.plan}
                  {planResult.duration}
                </span>
              </h5>
              <p id="btn-change" onClick={getPlan}>Change</p>
              </div>
              <button className="btn">Proceed to Payment</button>
              <button className="btn-cancel" onClick={() => setPlanResult([])}>
                Cancel Order
              </button>
      </div>
    </div>
  );
};

export default Work;
