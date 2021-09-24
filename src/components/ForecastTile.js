import React from "react";
import { Container } from "react-bootstrap";
import "./tile.scss";

const ForecastTile = ({ item }) => {
  return (
    <Container className="p-3 m-3 tile">
      <h4 className="tile-title">{item.dt}</h4>
      <div className="d-flex flex-row justify-content-center">
        <p>
          {item.temp.max}° {""}|{""} {item.temp.min}°
        </p>
      </div>
      <p>{item.weather[0].main}</p>
    </Container>
  );
};

export default ForecastTile;
