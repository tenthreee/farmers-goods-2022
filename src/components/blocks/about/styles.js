import styled from "styled-components";
import farmerImage from "/src/assets/farmer.svg";

export const StyledSection = styled.section`
  background-color: ${(props) => props.theme.colorForSpecialBackground};
`;

export const SectionWrapper = styled.div`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-right: 550px;
  padding-top: 185px;
  padding-bottom: 185px;
  box-sizing: border-box;

  background-image: url(${farmerImage});
  background-repeat: no-repeat;
  background-position: right bottom;
`;
