import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import FeatureLabel from "/src/components/ui/feature-label/feature-label";
import "./style.css";

function FeatureCard({ label, title, description, icon, isNegative }) {
  return (
    <article
      className={`feature-card${isNegative ? " feature-card--negative" : ""}`}
    >
      <div className="feature-card__wrapper">
        <img
          className="feature-card__icon"
          src={icon}
          alt=""
          width={48}
          height={52}
        />
        <div>
          <FeatureLabel className="feature-card__label" label={label} />
          <Title size={TitleSize.SMALL}>{title}</Title>
        </div>
      </div>
      <p
        className="feature-card__description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </article>
  );
}

export default FeatureCard;
