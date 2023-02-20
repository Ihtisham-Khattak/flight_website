import React, { useState } from "react";
import { RiFlightTakeoffFill } from "react-icons/ri";
import {
  MdOutlineSupportAgent,
  MdOutlineLanguage,
  MdOutlineMenu,
  MdOutlineCancel,
} from "react-icons/md";
import flightLogo from "../../assets/flight-logo.png";

const Navbar = () => {
  const [active, setIsActive] = useState("navBar-Menu");

  const handleShowNavbar = () => {
    setIsActive("navBar-Menu handleShowNavbar");
  };

  const removeShowNavbar = () => {
    setIsActive("navBar-Menu");
  };

  return (
    <div className="navBar flex">
      <div className="navBar-One flex">
        {/* Logo */}
        <div className="flight-logo">
          <RiFlightTakeoffFill />
        </div>

        {/* Utilities Icons */}
        <div className="none flex">
          <li className="flex">
            <MdOutlineSupportAgent className="icons" /> Support
          </li>
          <li className="flex">
            <MdOutlineLanguage className="icons" /> Language
          </li>
        </div>

        {/* Sign Up and In */}
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Up</span>
        </div>
      </div>

      {/* Logo section */}
      <div className="navBar-Two flex">
        <div className="logo__div">
          <img src={flightLogo} alt="flight" className="logo" />
        </div>
        {/* List items */}
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeShowNavbar}>
              <MdOutlineCancel className="cancel__icon" />
            </li>
            <li className="listItem">Home</li>
            <li className="listItem">About</li>
            <li className="listItem">Offers</li>
            <li className="listItem">Seats</li>
            <li className="listItem">Destinations</li>
          </ul>

          <button className="btn flex contactBtn__one">Contact</button>
        </div>

        <button className="btn flex contactBtn__two">Contact</button>

        {/* Menu bars */}
        <div className="toggle__Icon" onClick={handleShowNavbar}>
          <MdOutlineMenu className="icon__menu" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
