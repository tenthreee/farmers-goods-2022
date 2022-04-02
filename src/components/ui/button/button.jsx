import React from "react";
import { StyledButton } from "./styles";

function Button({ children }) {
  return <StyledButton type="button">{children}</StyledButton>;
}

export default Button;
