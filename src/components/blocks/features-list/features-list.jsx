import React from "react";
import Title from "/src/components/ui/title/title";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import Button from "/src/components/ui/button/button";
import "./style.css";

function FeaturesList({ features }) {
  return (
    <section className="features">
      {features && features.length ? (
        <>
          <Title>Почему фермерские продукты лучше?</Title>
          <ul className="features__list">
            {features.map((feature) => (
              <li className="features__item" key={feature.id}>
                <FeatureCard {...feature} />
              </li>
            ))}
          </ul>
          <Button minWidth={260}>Купить</Button>
        </>
      ) : null}
    </section>
  );
}

export default FeaturesList;
