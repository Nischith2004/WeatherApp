import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  let IMG_URL =
    "https://media.istockphoto.com/id/1455302746/photo/sunset-sky-over-the-sea-horizon-with-blue-and-golden-orange-colors.jpg?s=1024x1024&w=is&k=20&c=_beDLiiycgOghxj38FNKALGQgPBLGV_dwFK0Z2w9NTA=";

  let HOT_URL =
    "https://media.istockphoto.com/id/988274822/photo/young-mother-and-child-with-heatstroke.jpg?s=2048x2048&w=is&k=20&c=RN6Xz0PBFP9quHa34xwozBXUQCCt--_vD3Zfo7rF_e8=";
  let COLD_URL =
    "https://images.unsplash.com/photo-1564314966935-6c2f60eb32a7?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL =
    "https://media.istockphoto.com/id/902497530/photo/cars-driving-on-wet-road-in-the-rain-with-headlights.jpg?s=2048x2048&w=is&k=20&c=dawggjlenC9kMqXBcznFVmzdNaiLyj51QeGncJ20ZJE=";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon></ThunderstormIcon>
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature ={info.temp}&deg;C</p>
              <p>Humidity ={info.humidity}</p>
              <p>Max Temperature ={info.temp_max}&deg;C</p>
              <p>Min Temperature ={info.temp_min}&deg;C</p>
              <p>
                The weather feelsLike :<i>{info.feels_like}</i>&deg;C
              </p>
              <p>Weather info-{info.weather}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
