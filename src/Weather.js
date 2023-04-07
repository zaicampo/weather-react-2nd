import React from "react";

export default function Weather() {
  return (
    <div class="col-6" id="nowWeather">
      <h1 id="city-name">Bogotá</h1>
      <ul>
        <li>
          <span id="date">March 19 </span>,
          <span id="description"> few clouds</span>
        </li>
        <li>
          Humidity: <strong id="humidity"> 82</strong> %
        </li>
        <li>
          Wind: <strong id="wind"> 2</strong> m/s
        </li>
      </ul>
    </div>
  );
}
