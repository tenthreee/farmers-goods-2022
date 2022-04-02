import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;

  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.$size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "18px";
    }
    return fontSize;
  }};

  line-height: ${(props) => {
    let lineHeight = "41px";
    if (props.$size === TitleSize.BIG) {
      lineHeight = "50px";
    }
    if (props.$size === TitleSize.SMALL) {
      lineHeight = "150%";
    }
    return lineHeight;
  }};
`;
