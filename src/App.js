import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import logo from "./logo.svg";
import "./App.scss";
import NavigationBar from "./components/Nav";
import ForecastGrid from "./components/ForecastGrid";

function App() {
  //TODO: Toggle for metric vs imperial units
  //TODO: Search for your city and pull API for that lat/long

  const apiKey = process.env.REACT_APP_API_KEY;

  const cheyenneLat = "41.1400";
  const cheyenneLong = "-104.8202";
  const mauiLat = "20.7984";
  const mauiLong = "-156.3319";

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [toggle, setToggle] = useState(false);

  const units = toggle ? "imperial" : "metric";

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${cheyenneLat}&lon=${cheyenneLong}&exclude=alerts&units=${units}&appid=${apiKey}`
        // `https://api.openweathermap.org/data/2.5/onecall?lat=${cheyenneLat}&lon=${cheyenneLong}&exclude=alerts&units=imperial&appid=${apiKey}`
        // `https://api.openweathermap.org/data/2.5/onecall?lat=${mauiLat}&lon=${mauiLong}&exclude=alerts&units=imperial&appid=${apiKey}`
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
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => setToggle(!toggle)} className="text-button">
          Change units
        </Button>
        <ForecastGrid isLoading={isLoading} items={items} />
      </header>
    </div>
  );
}

export default App;
