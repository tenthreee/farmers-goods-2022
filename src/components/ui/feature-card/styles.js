import styled from "styled-components";

export const Feature = styled.article`
  box-sizing: border-box;
  padding: 20px;
  width: 540px;
  min-height: 215px;
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
`;

export const FeatureWrapper = styled.div`
  display: flex;
`;

export const FeatureIcon = styled.img`
  margin-right: 20px;
`;

export const StyledLabel = styled.span`
  display: inline-block;
  padding: 5px;
  margin-bottom: 10px;

  font-size: 14px;
  color: white;
  background-color: ${(props) => (props.isNegative ? "#f75531" : "#88aa4d")};
`;

export const FeatureDesctiption = styled.p`
  margin: 0;
  margin-top: 20px;
`;
