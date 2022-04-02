import styled from "styled-components";

export const StyledButton = styled.button`
  min-height: 60px;
  min-width: 260px;

  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: 27px;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorForButton};
  border: none;
  box-shadow: none;

  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;
