import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import "./style.css";
import featureList from "/src/mocks/featureList";

export default function App() {
  return <PageWrapper features={featureList} />;
}
