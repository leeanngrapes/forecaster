import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import Tile from "./components/Tile";

const town = "Cheyenne";
const weather = "cloudy";

function App() {
  const forecast = [
    {
      day: "Monday",
      minTemp: "55",
      maxTemp: "86",
      overview: "Cloudy",
    },
    {
      day: "Tuesday",
      minTemp: "58",
      maxTemp: "81",
      overview: "Sunny",
    },
    {
      day: "Wednesday",
      minTemp: "51",
      maxTemp: "89",
      overview: "Mostly Sunny",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Forecaster
        <p>
          It is {weather} today in {town}.
        </p>
        <p>The time is {new Date().toLocaleTimeString()}.</p>
        <Container className="d-flex flex-row justify-content-around">
          {forecast.map((item, i) => (
            <div key={i}>
              <Tile
                day={item.day}
                minTemp={item.minTemp}
                maxTemp={item.maxTemp}
                overview={item.overview}
              />
            </div>
          ))}
        </Container>
      </header>
    </div>
  );
}

export default App;
