import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { StyledSection, SectionWrapper } from "./styles";

// Раздел о магазине фермерских продуктов
function About() {
  return (
    <StyledSection>
      <SectionWrapper>
        <Title level={TitleLevel.H1} size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <p>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </p>
      </SectionWrapper>
    </StyledSection>
  );
}

export default About;
