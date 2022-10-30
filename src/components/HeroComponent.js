import React from "react";
import PhotoGrid from "../images/airbnb-photo-grid.svg";

const HeroComponent = () => {
  return (
    <main className="hero-sec">
      <img className="hero-img" src={PhotoGrid} alt="photo-grid" />
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-sub-title">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </main>
  );
};

export default HeroComponent;
