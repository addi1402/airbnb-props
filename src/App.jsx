import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./style.css";
import cardData from "./Data";

const mainData = cardData.map((card) => {
  return (
    <Card
      status={card.status}
      image={card.image}
      rating={card.rating}
      count={card.count}
      dest={card.dest}
      title={card.title}
      cost={card.cost}
    />
  );
});

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="catalogue">{mainData}</div>
    </>
  );
}
