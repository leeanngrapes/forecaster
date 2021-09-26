import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
  var maxTemp = Math.round(item.temp.max);
  var minTemp = Math.round(item.temp.min);

  return (
    <Col className="p-3 m-3 tile">
      <h4 className="tile-title">{day.toLocaleString("en-us", options)}</h4>

      <Row>
        <Col className="align-items-center">
          <p>{maxTemp}°</p>
          <p className="caption">High</p>
        </Col>
        |
        <Col className="align-items-center">
          <p>{minTemp}°</p>
          <p className="caption">Low</p>
        </Col>
      </Row>
      <p className="caption mb-0">What to expect today:</p>
      <p>{item.weather[0].main}</p>
    </Col>
  );
};

export default ForecastTile;
