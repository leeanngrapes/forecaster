import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.scss";
import NavigationBar from "./components/Nav";
import ForecastGrid from "./components/ForecastGrid";

function App() {
  //TODO: Round degrees to nearest whole number
  //TODO: Convert datetime to day of the week

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
        <img src={logo} className="App-logo" alt="logo" />
        <ForecastGrid isLoading={isLoading} items={items} />
      </header>
    </div>
  );
}

export default App;
