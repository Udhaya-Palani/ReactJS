import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css'

export function Climate() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = '10d0856f549c63283f2d565585a81f5b';

  useEffect(() => {
    if (location) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => console.error(error));
    }
  }, [location]);

  const handleSubmit = e => {
    e.preventDefault();
    setLocation(e.target.location.value);
  };

  return (
    <div className="weather text-center mt-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Enter a location:</label>
        <input type="text" id="location" name="location" />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <>
          <h2>Current Weather for {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} &deg;C</p>
          <p>Feels Like: {weatherData.main.feels_like} &deg;C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </>
      )}
    </div>
  );
}