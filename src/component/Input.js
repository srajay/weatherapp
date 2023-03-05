import React, { useEffect, useState } from "react";
import "./input.css";
import DateAndTime from "./DateAndTime";
import snow from "../asset/snow.png";
import sun from "../asset/sun.png";
import rain from "../asset/rain.png";
import cloudy from "../asset/cloudy.png";
import wind from "../asset/wind.png";
import "./temperature.css";

const Input = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  const [status, setStatus] = useState("");
  const [main, setMain] = useState("");
  const [cord, setCord] = useState("");
  const [suse, setSuse] = useState("");

  useEffect(() => {
    citySearch("Kathmandu");
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const citySearch = async (city) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dfd37d2cb6d39b4f6834bdcfc6df98ad`;
    const response = await fetch(API_URL);
    const weatherData = await response.json();
    setData(weatherData);
    const myStatus = weatherData.weather.map((statusData) => {
      return statusData.main;
    });
    setStatus(myStatus);
    setMain(weatherData.main);
    setCord(weatherData.coord);
    setSuse(weatherData.sys);
  };

  return (
    <>
      <div className="search-item">
        <input
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Search your city"
        ></input>
        <button onClick={() => citySearch(search)}>Search</button>
        <DateAndTime />
      </div>

      <div className="temperature">
        <div className="container_1">
          <div className="location_text">
            <p>{data.name}</p>
          </div>
          <div className="current_temp">
            <p>{Math.round(main.temp - 273)}°C</p>
          </div>
          <div className="temp_status">
            {status == "Snow" ? (
              <img src={snow} alt="snow" />
            ) : status == "Clear" ? (
              <img src={sun} alt="sun" />
            ) : status == "Rain" ? (
              <img src={rain} alt="rain" />
            ) : status == "Clouds" ? (
              <img src={cloudy} alt="cloud" />
            ) : (
              <img src={wind} alt="wind" />
            )}
            <p>{status}</p>
          </div>
          <div className="longlat">
            <p>High : {Math.round(main.temp_max - 273)}°C</p>
            <p>Low : {Math.round(main.temp_min - 273)}°C</p>
          </div>
        </div>
        <div className="container_2">
          <div className="box_1">
            <p>Pressure</p>
            <p>{main.pressure} hPa</p>
          </div>
          <div className="box_2">
            <p>Visibility</p>
            <p>{data.visibility / 1000} km</p>
          </div>
          <div className="box_3">
            <p>Humidity</p>
            <p>{main.humidity}%</p>
          </div>
        </div>
        <div className="container_3">
          <div className="location_text">
            <p>Longitude</p>
          </div>
          <div className="current_lon">
            <p>{cord.lon}</p>
          </div>
          <div className="location_text">
            <p>Latitude</p>
          </div>
          <div className="current_lon">
            <p>{cord.lat}</p>
          </div>

          <div className="riseset">
            <p>Sunrise : {suse.sunrise}</p>
            <p>Sunset : {suse.sunset}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
