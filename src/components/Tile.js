import React from "react";
import { Card, Container } from "react-bootstrap";
import "./tile.scss";

function Tile(props) {
  return (
    <Container className="p-3 m-3 tile">
      <h4 className="tile-title">{props.day}</h4>
      <div className="d-flex flex-row justify-content-center">
        <p>
          {props.maxTemp}° {""}|{""} {props.minTemp}°
        </p>
      </div>
      <p>{props.overview}</p>
    </Container>
  );
}

export default Tile;
