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
      <p className="gitHub-link">
        <a
          href="https://github.com/zaicampo/weather-react-2nd"
          target="_blank"
          rel="noreferrer"
        >
          Open Source Code
        </a>{" "}
        <span>by Zaira Campo</span>
      </p>
    </div>
  );
}
