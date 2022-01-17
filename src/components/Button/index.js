import React from "react";
import { Container } from "./styles";
const Button = ({ outline, children, ...rest }) => {
  return (
    <Container outline={outline} {...rest}>
      {children}
    </Container>
  );
};
export default Button;
