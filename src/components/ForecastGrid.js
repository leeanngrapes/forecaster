import React from "react";
import { Container } from "react-bootstrap";
import ForecastTile from "./ForecastTile";

const ForecastGrid = ({ items, isLoading }) => {
  const town = "Cheyenne";

  const currentTemp = Math.round(items.current.feels_like);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Container fluid>
      <h2>
        It currently feels like <em>{currentTemp}°</em> in <u>{town}</u>.
      </h2>
      <h3>The time is {new Date().toLocaleTimeString()}.</h3>
      <h1>Forecast:</h1>
      <section className="cards">
        {items.daily.map((item) => (
          <ForecastTile key={item.dt} item={item}></ForecastTile>
        ))}
      </section>
    </Container>
  );
};

export default ForecastGrid;
