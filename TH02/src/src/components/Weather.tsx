import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`https://wttr.in/${city}?format=j1`);
      setWeatherData(response.data);
    } catch (err) {
      setError('Không thể lấy dữ liệu thời tiết');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <h2>Thời tiết</h2>
      <div className="weather-form">
        <input
          type="text"
          className="weather-input"
          placeholder="Nhập tên thành phố"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="weather-button" onClick={handleSearch}>Xem thời tiết</button>
      </div>

      {loading && <p className="loading-message">Đang tải...</p>}
      {error && <p className="error-message">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h3>{city}</h3>
          <p><strong>Nhiệt độ:</strong> {weatherData.current_condition[0].temp_C} °C</p>
          <p><strong>Thời tiết:</strong> {weatherData.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
