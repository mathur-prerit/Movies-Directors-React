import React, { Component } from "react";
import { Route } from "react-router-dom";
import Movies from "./Movies.js";

function Header() {
  return (
    <div>
      <h1>Movies-Directors</h1>
      <div>
        <div>Movies</div>
        <div>Directors</div>
      </div>
    </div>
  );
}

export default Header;
