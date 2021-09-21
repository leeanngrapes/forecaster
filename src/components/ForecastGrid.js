import React from "react";
import plant from "../assets/plant.png";

const ForecastGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <section className="cards">
      {/* {items.map((item) => (
        <h3>{item.current.feels_like}</h3>
      ))} */}
    </section>
  );
};

export default ForecastGrid;
