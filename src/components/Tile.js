import React from "react";
import { Card, Row } from "react-bootstrap";
import styles from "./tile.css";

function Tile(props) {
  return (
    <Card className="d-flex mx-auto p-5 tile">
      <Card.Title>
        <p>{props.day}</p>
      </Card.Title>
      <Card.Body>
        <div className="d-flex flex-row justify-content-center">
          <p>{props.maxTemp}</p>|<p>{props.minTemp}</p>
        </div>
        <p>{props.overview}</p>
      </Card.Body>
    </Card>
  );
}

export default Tile;
