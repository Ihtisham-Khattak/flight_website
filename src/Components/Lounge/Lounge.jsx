import React from "react";
import FlightAttendent from "../../assets/flight_attendent_1.jpg";

const Lounge = () => {
  return (
    <div className="lounge container section">
      <div className="section__container grid">
        {/* Image dev */}
        <div className="img__dev">
          <img src={FlightAttendent} alt="image" />
        </div>

        {/* Text dev */}
        <div className="text__dev">
          <h2>Unaccompained Minor Lounge</h2>
        </div>

        {/* Grid dev */}
        <div className="grids grid">
          {/* Single Grid 1. */}
          <div className="single__grid">
            <span className="grid__title">Help through the airport</span>
            <p>
              You can also call airlines from your phone, and book a flight
              tickets without any hesitation, and restriction
            </p>
          </div>
          {/* Single Grid 2. */}
          <div className="single__grid">
            <span className="grid__title">Help through the airport</span>
            <p>
              You can also call airlines from your phone, and book a flight
              tickets without any hesitation, and restriction
            </p>
          </div>
          {/* Single Grid 3. */}
          <div className="single__grid">
            <span className="grid__title">Help through the airport</span>
            <p>
              You can also call airlines from your phone, and book a flight
              tickets without any hesitation, and restriction
            </p>
          </div>
          {/* Single Grid 4. */}
          <div className="single__grid">
            <span className="grid__title">Help through the airport</span>
            <p>
              You can also call airlines from your phone, and book a flight
              tickets without any hesitation, and restriction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
