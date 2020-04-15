import React from "react";
import City from "./City";
import Icon from "./Icon";
/* import Condition from "./Condition"; */
import styled from "@emotion/styled";

const WeatherCard = (props) => {
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to top, skyblue, darkblue);
    width: 200px;
    height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 15px;
    position: relative;
  `;

  return (
    <Card>
      <City />
      <Icon />
      {/* <Condition /> */}
    </Card>
  );
};

export default WeatherCard;
