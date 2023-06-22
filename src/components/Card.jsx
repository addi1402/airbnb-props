import React from "react";
import "../stylesheets/Card.css";
import Star from "../assets/star.svg";

export default function Card({item}) {

  // Status Logic
  let badgeText;
  if(item.status === false){
    badgeText = "Sold Out";
  }else{
    badgeText = "Online"; 
  }

  return (
    <section className="card">
      <div className="image">
        <span className="status">{badgeText}</span>
        <img src={item.image} alt="Loading" />
      </div>

      <div className="details">
        <img src={Star} alt="" className="star" />
        <p className="rating">{item.rating}</p>
        <p className="count">({item.count})</p>
        <p className="country">&#x2022; {item.dest}</p>
      </div>
      <p className="info">{item.title}</p>
      <p className="info">
        <span>From ${item.cost} /</span> person
      </p>
    </section>
  );
}
