import React from "react";
import Hero from "../components/heroSection/Hero";
import Customer from "../components/heroSection/Customer";
import Features from "../components/features";
import GetStarted from "../components/GetStarted";

const Home = () => {
  return (
    <div>
      <Hero />
      <Customer />
      <Features/>
      <GetStarted/>
    </div>
  );
};

export default Home;
