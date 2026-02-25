
import React, { useState } from "react";
import { getWeatherByDate } from "../api/weatherApi";

function WeatherByDate() {
  const [date, setDate] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    if (!date) {
      setError("Select a valid date");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const res = await getWeatherByDate(date);
      setData(res.daily);
    } catch {
      setError("Not available");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="card">
      <h2>Weather By Date</h2>
      <input type="date" onChange={(e) => setDate(e.target.value)} /><br/>
      <button onClick={fetchData}>Get Weather</button>   
    
      {data && (
        <div className="result">
          <p>Max: {data.temperature_2m_max[0]} °C</p>
          <p>Min: {data.temperature_2m_min[0]} °C</p>
          <p>Humidity: {data.relative_humidity_2m_mean[0]} %</p>
          <p>Pressure: {data.pressure_msl_mean[0]} hPa</p>
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
}
export default WeatherByDate;