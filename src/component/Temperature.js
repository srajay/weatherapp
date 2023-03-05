import React from "react";
import wind from "../asset/wind.png";
import sun from "../asset/sun.png";
import "./temperature.css";

const Temperature = () => {
  return (
    <div className="temperature">
      <div className="container_1">
        <div className="location">
          <p>Siraha</p>
        </div>
        <div className="current_temp">
          <p>388°C</p>
        </div>
        <div className="temp_status">
          <img src={sun} alt="rain" />
          <p>Sunny</p>
        </div>
        <div className="longlat">
          <p>High : 21°C</p>
          <p>Low : 10°C</p>
        </div>
      </div>
      <div className="container_2">
        <div className="box_1">
          <p>Pressure</p>
          <p>400mb</p>
        </div>
        <div className="box_2">
          <p>Visibility</p>
          <p>4.3 km</p>
        </div>
        <div className="box_3">
          <p>Humidity</p>
          <p>87%</p>
        </div>
      </div>
      <div className="container_3">
        <div className="location">
          <p>Air Quality</p>
        </div>
        <div className="current_temp">
          <p>25 AQI</p>
        </div>
        <div className="temp_status">
          <img src={wind} alt="rain" />
          <p>Good</p>
        </div>
        <div className="riseset">
          <p>Sunrise : 6:00</p>
          <p>Sunset : 6:30</p>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
