import React from "react";

export const ProductFeature = {
  FARM: "farm",
  SHOP: "shop"
};

function FeatureLabel({ className = "", label }) {
  let options;

  switch (label) {
    case ProductFeature.FARM:
      options = {
        text: "Фермерские продукты",
        bgColor: "#88AA4D"
      };
      break;
    case ProductFeature.SHOP:
      options = {
        text: "Магазинные продукты",
        bgColor: "#F75531"
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "#000"
      };
      break;
  }

  return options.text ? (
    <span
      className={`feature-card__label ${className}`}
      style={{ backgroundColor: options.bgColor }}
    >
      {options.text}
    </span>
  ) : null;
}

export default FeatureLabel;
