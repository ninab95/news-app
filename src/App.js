import React from "react";
import "./App.css";
import Header from "./components/Header";
// import InfoContainer from "./components/InfoContainer";
import WelcomePage from "./components/WelcomePage";
import SharePage from "./components/SharePage";

function App() {
  return (
    <div className="App">
      <Header isHomePage={false} />
      {/* <InfoContainer /> */}
      <WelcomePage />
      <SharePage />
    </div>
  );
}

export default App;
