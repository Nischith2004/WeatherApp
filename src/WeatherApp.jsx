import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [weatherinfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feels_like: 24.08,
    temp: 25.05,
    temp_min: 22.05,
    temp_max: 29.5,
    humidity: 47,
    weather: "haze",
  });
  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>WeatherApp</h1>
      <SearchBox updateInfo={updateInfo}></SearchBox>

      <InfoBox info={weatherinfo}></InfoBox>
    </div>
  );
}
