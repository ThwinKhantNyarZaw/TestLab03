import React from "react";
import "./../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Welcome to My App</h1>
      <p>The best solution for your needs</p>
      <button className="header-button">Get Started</button>
    </header>
  );
}

export default Header;
