import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import {
  Feature,
  FeatureWrapper,
  FeatureIcon,
  StyledLabel,
  FeatureDesctiption
} from "./styles";

// Карточка
function FeatureCard({
  label, // Лейбл особенности
  title, // Название особенности
  description, // Описание особенности
  icon, // Иконка
  isNegative // Является ли особенность отрицательной
}) {
  return (
    <Feature isNegative={isNegative}>
      <FeatureWrapper>
        <FeatureIcon src={icon} alt="" width={48} height={52} />
        <div>
          <StyledLabel isNegative={isNegative}>{label}</StyledLabel>
          <Title level={TitleLevel.H3} size={TitleSize.SMALL}>
            {title}
          </Title>
        </div>
      </FeatureWrapper>
      <FeatureDesctiption dangerouslySetInnerHTML={{ __html: description }} />
    </Feature>
  );
}

export default FeatureCard;
