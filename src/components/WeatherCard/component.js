import React from "react";
import styled from "@emotion/styled";

import City from "./City";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = (props) => {
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to top, skyblue, darkblue);
    width: 12rem;
    height: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    position: relative;
  `;

  return (
    <Card>
      <City />
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;
