import React from "react";
import { Container } from "./styles";
const Card = ({ width, children }) => {
  return <Container width={width}>{children}</Container>;
};
export default Card;
