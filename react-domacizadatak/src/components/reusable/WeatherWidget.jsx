// src/components/WeatherWidget.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherWidget = () => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Belgrade&units=metric&appid=2af35955a5e2786ac24e74ed7d6e0335`
        );
        setTemperature(response.data.main.temp);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error fetching weather data.</p>;

  return (
    <div className="weather-widget">
      <h2>Trenutna temperatura u Beogradu</h2>
      <p>{temperature ? `${temperature}°C` : "N/A"}</p>
    </div>
  );
};

export default WeatherWidget;
