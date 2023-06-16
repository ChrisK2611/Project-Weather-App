import { useEffect, useState } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Muenchen from "./pages/Muenchen";

function App() {
  const [weatherData, setWeatherData] = useState();
  const API_KEY = import.meta.env.VITE_API_KEY

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Muenchen&lang=de&units=metric&appid=${API_KEY}`
    )
      .then(res => res.json())
      .then(data => setWeatherData(data))
      .catch(error => console.log("Fehler beim Laden der Seite", error));
  }, []);

  return (
    <div>
      <Nav />
      <div className="wetterDaten">
        {weatherData ? (
          <Muenchen 
            temp={Math.round(weatherData.main.temp)}
            weather={weatherData.weather[0].description}
            icon={weatherData.weather[0].icon}
            wind={Math.round(weatherData.wind.speed * 3.701)}
            name={weatherData.name}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
