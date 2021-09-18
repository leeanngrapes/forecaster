import React from "react";
import { Card } from "react-bootstrap";
import "./tile.css";

function Tile(props) {
  return (
    <Card className="p-3 m-3 tile col-md">
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
