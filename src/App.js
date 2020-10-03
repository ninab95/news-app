import React from "react";
import "./App.css";
import Header from "./components/Header";
// import InfoContainer from "./components/InfoContainer";
import WelcomePage from "./components/WelcomePage";
import SharePage from "./components/SharePage";
import WritingPost from "./components/WritingPost";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header isHomePage={false} />
      {/* <InfoContainer /> */}
      <WelcomePage />
      <SharePage />
      <WritingPost />
      <Footer />
    </div>
  );
}

export default App;
