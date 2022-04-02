import styled from "styled-components";

export const StyledLogo = styled.a`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: ${(props) => props.theme.colorForText};
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
`;

export const LogoText = styled.span`
  padding-left: 35px;
`;
