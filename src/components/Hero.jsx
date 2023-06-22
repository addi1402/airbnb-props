import React from "react";
import "../stylesheets/Hero.css";
import Image from "../assets/group.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="group-img">
        <img src={Image} />
      </div>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
