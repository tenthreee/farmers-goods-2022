import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const FeaturesUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  margin-top: 65px;
  margin-bottom: 65px;
  padding-left: 0;

  list-style-type: none;
`;
