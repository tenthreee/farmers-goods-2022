import styled from "styled-components";

export const StyledHeader = styled.header`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding: ${(props) => props.theme.pagePadding};

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colorWhite};
`;
