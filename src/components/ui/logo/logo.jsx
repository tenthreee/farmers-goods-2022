import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogo, LogoText } from "./styles";

// Логотип сайта с названием
function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
}

export default Logo;
