import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
