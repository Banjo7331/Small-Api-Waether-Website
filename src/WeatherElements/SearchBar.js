import React from "react";
import "../WeatherAppStylesFiles/SearchBarTemplate.css";
import { useState } from "react";
import MainScreen from "./MainScreen";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

let rightValueToGoThrough = false;

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [isRIght, setIsRight] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      // Process the input value
      rightValueToGoThrough = true;
      console.log("Input value:", inputValue);
      setIsRight(false);
    } else {
      alert("Please enter City you looking for!");
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isRIght ? (
              <div className="SearchBar">
                <div className="overlay">
                  <form id="form" onSubmit={handleSubmit}>
                    <input
                      type="search"
                      id="query"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      name="City"
                      placeholder="Search for city..."
                    />
                    <button id="search" />
                  </form>
                  <p id="textWelcoming">Check the Weather!</p>
                </div>
              </div>
            ) : (
              <Navigate replace to={"/" + inputValue} />
            )
          }
        ></Route>
        <Route
          path={"/" + inputValue}
          element={<MainScreen cityToCheck={inputValue} />}
        ></Route>
      </Routes>
    </Router>
  );
}
