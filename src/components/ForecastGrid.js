import React from "react";
import { Container, Row } from "react-bootstrap";
import ForecastTile from "./ForecastTile";

//TODO: Conditionally change color of text or an image based on weather type
//TODO: Figure out why currentTemp is throwing errors, was working fine before...

const ForecastGrid = ({ items, isLoading }) => {
  const town = "Cheyenne";

  // const currentTemp = Math.round(items.current.feels_like);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Container fluid>
      <h2>
        {/* It currently feels like <em>{currentTemp}°</em> in <u>{town}</u>. */}
      </h2>
      <h3>
        The time is{" "}
        {new Date().toLocaleTimeString({ hour: "2-digit", hour12: false })}.
      </h3>
      <h1>Forecast:</h1>
      <Row className="flex-row">
        {items.daily.map((item) => (
          <ForecastTile key={item.dt} item={item}></ForecastTile>
        ))}
      </Row>
    </Container>
  );
};

export default ForecastGrid;
