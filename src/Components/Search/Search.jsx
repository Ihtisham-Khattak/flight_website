import React from "react";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import { MdPersonOutline } from "react-icons/md";

const Search = () => {
  return (
    <div className="search container section">
      <div className="searchContainer grid">
        {/* Buttons */}
        <div className="btns flex active">
          <div className="singleButton">
            <span>Economy Class</span>
          </div>
          <div className="singleButton">
            <span>Business Class</span>
          </div>
          <div className="singleButton">
            <span>First Class</span>
          </div>
        </div>
        {/* Search */}
        <div className="searchInputs flex">
          {/* Location */}
          <div className="singleInput flex">
            <div className="iconDev">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Where to Go" />
            </div>
          </div>

          {/* Travel */}
          <div className="singleInput flex">
            <div className="iconDev">
              <MdPersonOutline className="icon" />
            </div>
            <div className="texts">
              <h4>Travel</h4>
              <input type="text" placeholder="Travel Advisory" />
            </div>
          </div>

          {/* Check In */}
          <div className="singleInput flex">
            <div className="iconDev">
              <HiOutlineCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder="Departure" />
            </div>
          </div>

          {/* Check Out */}
          <div className="singleInput flex">
            <div className="iconDev">
              <HiOutlineCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder="Departure" />
            </div>
          </div>

          {/* Button */}
          <button className="btns btnBlock flex">Search In </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
