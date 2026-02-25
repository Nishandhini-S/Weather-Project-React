
import React, { useState } from "react";
import { getWeatherByMonth } from "../api/weatherApi";

function WeatherByMonth() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchData = async () => {
    if (!year || !month) {
      setError("Enter valid year & month");
      return;
    }

    try {
      setError("");
      const res = await getWeatherByMonth(year, month);
      setData(res.daily);
    } catch {
      setError("Monthly fetch failed.");
    }
  };

  return (
    <div className="card">
      <h2>Weather By Month</h2>

      <input placeholder="Year " onChange={(e) => setYear(e.target.value)} />
      <input placeholder="Month " onChange={(e) => setMonth(e.target.value)} /><br/>

      <button onClick={fetchData}>Get Data</button>

      {data && (
        <div className="result">
    
          <p>Highest Temp: {Math.max(...data.temperature_2m_max)} °C</p>
          <p>Lowest Temp: {Math.min(...data.temperature_2m_min)} °C</p>
        </div>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default WeatherByMonth;