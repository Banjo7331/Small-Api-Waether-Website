import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Temperature from './WeatherElements/Temperature';

const isLocationChoosen = false;
const city = "Warsaw";
let lat = "";
let lon = "";
let apiCoordinatesUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=";


//Fragment to codowania api, trza zrobic
const crypto = require('crypto');
// Function to hash a password with a salt
function hashPassword(password, salt) {
    const hash = crypto.createHmac('sha256', salt);
    hash.update(password);
    const hashedPassword = hash.digest('hex');
    return hashedPassword;
}

// Example usage
let password = "mysecretpassword";
let salt = "somesaltvalue";
let hashedPassword = hashPassword(password, salt);

console.log("Hashed Password:", hashedPassword);


function App() {
  const [api, setApi] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  console.log(apiCode - 1111);
  useEffect(() => {
    const fetchUserData = async () => {
      // trzeba zmieniac w stringu latitude i longtitude w zaleznosci od miejsca gdzie chcemy pokazywac pogode
      let apiWeatherDataUrl = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,rain,showers,windspeed_10m,windspeed_80m,windspeed_120m";
      try {
        const response = await axios.get(apiWeatherDataUrl);
        setApi(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const coodrinatesFetching = async () => {
      try {
        const response = await axios.get(apiCoordinatesUrl);
        const coordinates = response.data; 
  
        setCoordinates(coordinates);
        console.log(response);
  
        if (coordinates && coordinates.length > 0) {
          lat = coordinates[0].lat;
          lon = coordinates[0].lon;
          console.log("Latitude:", lat);
          console.log("Longitude:", lon);
        }
        fetchUserData();
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    coodrinatesFetching();
    
    
    
  }, []);
  
  
  return (
    <div>
      {api && (
        <div>
          <p>Time: {api.hourly.time[0]}</p>
          <p>Temperature: {api.hourly.temperature_2m[0]}</p>
            <Temperature temp = {api.hourly.temperature_2m} time = {api.hourly.time}/>
        </div>
      )}
    </div>
  );
}

export default App;
