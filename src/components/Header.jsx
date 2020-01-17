import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App">
      <h1>Movies-Directors</h1>
      <div>
      <Link to="/movies/">Movies</Link>
        <Link to="/directors/">Directors</Link>
      </div>
    </div>
  );
}

export default Header;
