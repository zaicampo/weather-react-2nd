import "./styles.css";
import Form from "./Form";
import Weather from "./Weather";
import Temperature from "./Temperature";

export default function App() {
  return (
    <div className="App">
      <div class="container" id="weather-app">
        <Form />
        <div class="WeatherInfo">
          <div class="row">
            <Weather />
            <Temperature />
          </div>
        </div>
      </div>
    </div>
  );
}
