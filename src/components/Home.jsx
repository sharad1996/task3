import React from "react";
import "../styles/styles.css";
import HeroBanner from "./HeroBanner";
import Features from "./Feature";
import Services from "./Services";
import Pricing from "./Pricing";
import Download from "./Downlaod";

export default function App() {
  return (
    <main>
      <HeroBanner />
      {/* <Features /> */}
      <Services />
      <Pricing />
      <Download />
    </main>
  );
}
