import React from "react";
import styled from "@emotion/styled";

const Condition = (props) => {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
  `;

  const Condition = styled.h2`
    font-family: "Merriweather Sans", sans-serif;
    font-size: 1.6rem;
  `;

  return (
    <Condition>
      <Temp>20 °C</Temp>
      <Condition>Clouds</Condition>
    </Condition>
  );
};

export default Condition;
