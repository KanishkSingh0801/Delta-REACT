import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox() {
  let [city, setCity] = useState("");
  const apiURL = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "327ab9418f30ce661a4aca49e5d917d4";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${apiURL}?q=${city}&appid=${apiKey}&units=metric`
    );
    let data = await response.json();
    let result = {
      city: city,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
      weather: data.weather[0].description,
    };
    console.log(result);
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };
  return (
    <div className="searchBox">
      <form>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button onClick={handleSubmit} variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
