import React, { Component } from "react";
// import Header from './Header.jsx'
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/movies/">Movies</Link>
        <Link to="/directors/">Directors</Link>
      </div>
    );
  }
}

export default Home;
