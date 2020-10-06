import React from "react";
import Header from "../components/Header";
import InfoContainer from "../components/InfoContainer";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header isHomePage={true} />
      <InfoContainer />
      <Footer />
    </div>
  );
}

export default HomePage;
