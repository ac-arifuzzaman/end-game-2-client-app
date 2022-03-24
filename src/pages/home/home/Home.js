import React from "react";
import Banner from "../../banner/Banner";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import Services from "../services/Services";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
