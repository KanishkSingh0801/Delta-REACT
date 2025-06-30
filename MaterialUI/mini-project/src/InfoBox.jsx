import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox() {
  const initialURL =
    "https://media.istockphoto.com/id/2175083463/photo/new-delhi-delhi-india-fire-truck-spraying-water-over-delhi-streets-amid-pollution-emergency.jpg?s=612x612&w=is&k=20&c=FelKRxiV_U--KxN2N6mreV_ofYbFfptvAJ61Z3wtP2A=";

  let info = {
    city: "New Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    temp_min: 25.05,
    temp_max: 25.05,
    humidity: 47,
    weather: "Sunny",
  };
  return (
    <div className="infoBox">
      <div className="weatherCard">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={initialURL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temperature = {info.temp_min}&deg;C</p>
              <p>Max Temperature = {info.temp_max}&deg;C</p>
              <p>
                The Weather can be described as <b>{info.weather}</b> and it
                feels like : {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
