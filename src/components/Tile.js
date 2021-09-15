import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./tile.css";

function Tile(props) {
  return (
    <Card className="d-flex mx-1 pt-2 tile">
      <h4 className="tile-title">{props.day}</h4>
      <div className="d-flex flex-row justify-content-center">
        <p>
          {props.maxTemp}° {""}|{""} {props.minTemp}°
        </p>
      </div>
      <p>{props.overview}</p>
    </Card>
  );
}

export default Tile;
