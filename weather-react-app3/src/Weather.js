import React from "react";
import "./Weather.css";
export default function Weather() {
  let weatherData = {
    city: "Singapore",
    date: "Tuesday",
    temperature: 19,
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <div id="box">
        <div className="container">
          <div className="row g-3">
            <div className="col-4">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a City"
                  autofocus
                />
              </form>
            </div>
            <span className="col-8">
              <button type="button" className="btn btn-secondary">
                Search
              </button>

              <button type="button" className="btn btn-success">
                Current
              </button>
            </span>
            <header className="cityname">
              <span>{weatherData.city}</span>
            </header>
            <div>{weatherData.date}</div>
            <div>{weatherData.description}</div>
            <div className="clearfix weather-temperature">
              <span className="citytemperature">{weatherData.temperature}</span>
              <img
                src={weatherData.imgUrl}
                className="icon"
                alt="weather-icon"
              />
              <a href="/" className="celsius active">
                °C |
              </a>
              <a href="/" className="fahrenheit active">
                {" "}
                °F{" "}
              </a>
            </div>
            <ul>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span>{weatherData.wind}</span>km/h
              </li>
            </ul>
            <section>
              <div className="weather-forecast"></div>
            </section>
          </div>
        </div>
      </div>
      <a
        href="https://github.com/kiwicubex/weather-react"
        target="_blank"
        class="credit"
        rel="noreferrer"
      >
        Open-source code
      </a>
      by Amanda Chan
      <script src="src/index.js"></script>
    </div>
  );
}
