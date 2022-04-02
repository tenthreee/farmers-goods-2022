import React from "react";
import Title, { TitleLevel } from "/src/components/ui/title/title";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import Button from "/src/components/ui/button/button";
import { StyledSection, FeaturesUl } from "./styles";

// Список преимуществ
function FeaturesList({
  features // массив объектов с id, label, title, description, image, isNegative
}) {
  return (
    <StyledSection>
      {features && features.length ? (
        <>
          <Title level={TitleLevel.H2}>Почему фермерские продукты лучше?</Title>
          <FeaturesUl>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureCard {...feature} />
              </li>
            ))}
          </FeaturesUl>
          <Button minWidth={260}>Купить</Button>
        </>
      ) : null}
    </StyledSection>
  );
}

export default FeaturesList;
