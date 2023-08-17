import React from "react";
import Hero from "../components/heroSection/Hero";
import Customer from "../components/heroSection/Customer";
import Features from "../components/features";

const Home = () => {
  return (
    <div>
      <Hero />
      <Customer />
      <Features/>
    </div>
  );
};

export default Home;
