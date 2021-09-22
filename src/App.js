import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import Tile from "./components/Tile";
import NavigationBar from "./components/Nav";
import Header from "./components/Header";
import ForecastGrid from "./components/ForecastGrid";

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

  //TODO: Figure out why build error occurs on first build with apiKey
  // If instances are commented out, it builds. Then, if uncommented and saved, it builds.
  const apiKey = process.env.REACT_APP_API_KEY;

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        // `https://www.breakingbadapi.com/api/characters`
        `https://api.openweathermap.org/data/2.5/onecall?lat=41.1400&lon=-104.8202&exclude=alerts&units=imperial&appid=${apiKey}`
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
          It is <em>{items.current.weather[0].main}</em> today in <u>{town}</u>.
        </h2>
        <h3>Feels like {items.current.feels_like} degrees F.</h3>
        <h3>The time is {new Date().toLocaleTimeString()}.</h3>
        <img src={logo} className="App-logo" alt="logo" />
        {/* TODO: Put forecast cards in a grid */}
        <ForecastGrid isLoading={isLoading} items={items} />
        <Container className="mt-5">
          <h4>Looking ahead</h4>
          <Row className="d-flex mt-4 flex-row justify-content-center">
            {forecast.map((item, i) => (
              <Col>
                <Tile
                  day={item.day}
                  // TODO: Loop through the daily array
                  minTemp={items.daily[1].temp.min}
                  maxTemp={items.daily[1].temp.max}
                  overview={items.daily[1].weather[0].main}
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
