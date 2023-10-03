import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Temperature from './WeatherElements/Temperature';

/*const fetchUserData = async () => {
  return axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.2298&longitude=21.0118&hourly=temperature_2m")
    .then(({data}) => {
      console.log(data)
      return data;
    })
};*/

function App() {
  const [users, setUsers] = useState(null);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.2298&longitude=21.0118&hourly=temperature_2m");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  
  
  return (
    <div>
      {users && (
        <div>
          <p>Time: {users.hourly.time[0]}</p>
          <p>Temperature: {users.hourly.temperature_2m[0]}</p>
            <Temperature temp = {users} />
        </div>
      )}
    </div>
  );
}

export default App;
