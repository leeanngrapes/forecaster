import React from "react";
import { Container } from "react-bootstrap";
import "./tile.scss";

const ForecastTile = ({ item }) => {
  var utcSeconds = item.dt;
  var day = new Date(0);
  day.setUTCSeconds(utcSeconds);

  var options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  return (
    <Container className="p-3 m-3 tile">
      <h4 className="tile-title">{day.toLocaleString("en-us", options)}</h4>
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
