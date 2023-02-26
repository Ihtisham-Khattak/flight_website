import React from "react";
import FlyingPlan from "../../assets/background.mp4"
import PlanFlying from "../../assets/flying-plan.png"
const Home = () => {
  return (
    <div className="home flex container">
      <div >
        <h2 className="mainText">J - Flights: Fly with us like a real </h2>
      </div>
      {/* Flight Video */}
      <div className="homeImage flex">
        <div className="videoDev">
          <video src={FlyingPlan} autoPlay muted loop className="video" />
        </div>
        <img src={PlanFlying} className="plane" />
      </div>
    </div>
  );
};

export default Home;
