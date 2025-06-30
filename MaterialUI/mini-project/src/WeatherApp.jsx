import React from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "New York",
    feelsLike: 24.84,
    temp: 25.05,
    temp_min: 25.05,
    temp_max: 25.05,
    humidity: 47,
    weather: "Sunny",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Delta</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
