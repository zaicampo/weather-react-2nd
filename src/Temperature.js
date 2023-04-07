import React from "react";

export default function Temperature() {
  return (
    <div class="col-6">
      <div class="temperature-container d-flex justify-content-end">
        <img
          id="canvas"
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-night.png"
          alt="rain-clouds"
        />

        <div>
          <span class="temperature" id="temperature">
            14
          </span>
          <span>
            {" "}
            <a href="/" id="cel-unit" class="active">
              °C
            </a>
          </span>{" "}
          |{" "}
          <span>
            <a href="/" id="fah-unit">
              {" "}
              ºF
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
