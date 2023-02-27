import React from "react";
import Image from "../../assets/window_2.jpg"

const Support = () => {
  return (
    <div className="support container section">
      <div className="section-Container">
        {/* Title Dev */}
        <div className="title__dev">
          <small>Travel Support </small>
          <h2>Plan your travel with confidence</h2>
          <p>
            Find help with booking travel plans. See what to expect along the
            journey!
          </p>
        </div>

        {/* Info Dev */}
        <div className="info__dev grid">
          <div className="text__dev grid">
            {/* Card 01 */}
            <div className="single__info">
              <span className="number">01</span>
              <h2>Travel Requiremnet for Dubai</h2>
              <p>
                Find help with booking travel plans. See what to expect along
                the journey to your favorite destination!
              </p>
            </div>

            {/* Card 02 */}
            <div className="single__info">
              <span className="number">02</span>
              <h2>Multi Risk Travel Insurance</h2>
              <p>
                Find help with booking travel plans. See what to expect along
                the journey to your favorite destination!
              </p>
            </div>

            {/* Card 03 */}
            <div className="single__info">
              <span className="number">03</span>
              <h2>Services at your arrival</h2>
              <p>
                Find help with booking travel plans. See what to expect along
                the journey to your favorite destination!
              </p>
            </div>
          </div>

          {/* Image Dev */}
          <div className="image__dev">
            <img src={Image} alt="image" style={{borderRadius: "45px"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
