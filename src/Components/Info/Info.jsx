import React from "react";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { BsBookmarkCheck, BsCalendar2Date } from "react-icons/bs";
const Info = () => {
  return (
    <div className="info section">
      <div className="info-container container">
        {/* Info Heading */}
        <div className="title__dev flex">
          <h2>Travel to make memories all around the world</h2>
          <button className="btn">Click to View</button>
        </div>

        {/* Card Section */}
        <div className="cards__div grid">
          {/* Card 1. */}
          <div className="single__card grid">
            <div className="icon__div">
              <BsCalendar2Date className="icon" />
            </div>
            <span className="card__title">Book & Relax</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket!
            </p>
          </div>

          {/* Card 2. */}
          <div className="single__card grid">
            <div className="icon__div">
              <HiOutlineShieldCheck className="icon" />
            </div>
            <span className="card__title">Smart CheckList</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket!
            </p>
          </div>

          {/* Card 3. */}
          <div className="single__card grid">
            <div className="icon__div">
              <BsBookmarkCheck className="icon" />
            </div>
            <span className="card__title">Book & Relax</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
