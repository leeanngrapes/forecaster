import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import Tile from "./components/Tile";
import NavigationBar from "./components/Nav";
import Header from "./components/Header";
// import clouds from "./assets/";

const town = "Cheyenne";
const weather = "cloudy";

function App() {
  const forecast = [
    {
      day: "Monday",
      minTemp: "52",
      maxTemp: "79",
      overview: "Stormy",
    },
    {
      day: "Tuesday",
      minTemp: "48",
      maxTemp: "72",
      overview: "Partly sunny",
    },
    {
      day: "Wednesday",
      minTemp: "45",
      maxTemp: "84",
      overview: "Sunny",
    },
    {
      day: "Thursday",
      minTemp: "41",
      maxTemp: "74",
      overview: "Sunny",
    },
    {
      day: "Friday",
      minTemp: "45",
      maxTemp: "75",
      overview: "Sunny",
    },
  ];

  //items = the characters or the weather (not sure how yet)
  //returns an empty array to start with
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        // `https://www.breakingbadapi.com/api/characters`
        `https://api.openweathermap.org/data/2.5/onecall?lat=41.1400&lon=-104.8202&exclude=alerts&units=imperial&appid=0d6e82bfca79ee7a6e0802e4310db241`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <h1>Forecaster</h1>
        <h2>
          It is <em>{weather}</em> today in <u>{town}</u>.
        </h2>
        <h3>The time is {new Date().toLocaleTimeString()}.</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <Container className="mt-5">
          <h4>Looking ahead</h4>
          <Row className="d-flex mt-4 flex-row justify-content-center">
            {forecast.map((item, i) => (
              <Col>
                <Tile
                  day={item.day}
                  minTemp={item.minTemp}
                  maxTemp={item.maxTemp}
                  overview={item.overview}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
