import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";
import styled from "@emotion/styled";

function App() {
  const App = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    color: rgb(255, 255, 255);
    font-family: "Merriweather Sans", sans-serif;
    background: lightcoral;
  `;

  return (
    <App>
      <WeatherCard />
    </App>
  );
}

export default App;
