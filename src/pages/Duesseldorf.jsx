import { useEffect, useState } from "react";
import Nav from "../components/Nav";



const Duesseldorf = () => {
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Duesseldorf&lang=de&units=metric&appid=${API_KEY}`,
        )
        .then(res => res.json())
        .then(data => setWeatherData(data))
        .catch(error => console.log("Fehler beim Laden der Seite", error));
    }, []);
  
    return ( 
        <div>
            <Nav />
            {weatherData ? (
                <section>
                    <div>
                        {weatherData.weather[0].description} in {weatherData.name}
                        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="" />
                    </div>
                    <div>
                        Temparatur: {Math.round(weatherData.main.temp)}°C
                    </div>
                    <div>
                        Wind: {Math.round(weatherData.wind.speed * 3.701)}km/h
                    </div>
                </section>
            ) : null}
        </div>
    );
}
 
export default Duesseldorf;