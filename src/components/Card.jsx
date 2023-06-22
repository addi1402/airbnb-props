import React from "react";
import "../stylesheets/Card.css";
import Star from "../assets/star.svg";

export default function Card({
  status,
  image,
  rating,
  count,
  dest,
  title,
  cost,
}) {
  return (
    <section className="card">
      <div className="image">
        <span className="status">{status}</span>
        <img src={image} alt="" />
      </div>

      <div className="details">
        <img src={Star} alt="" className="star" />
        <p className="rating">{rating}</p>
        <p className="count">({count})</p>
        <p className="country">&#x2022; {dest}</p>
      </div>
      <p className="info">{title}</p>
      <p className="info">
        <span>From ${cost} /</span> person
      </p>
    </section>
  );
}
