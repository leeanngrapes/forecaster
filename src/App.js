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
