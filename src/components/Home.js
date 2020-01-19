import React, { Component } from "react";
// import Header from './Header.jsx'
import {withRouter } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home-page">
        <h1
        className="home-page-btn"
          onClick={() => {
            this.props.history.push("/movies/");
          }}
        >
          Movies
        </h1>
        <h1
         className="home-page-btn"
          onClick={() => {
            this.props.history.push("/directors/");
          }}
        >
          Directors
        </h1>
      </div>
    );
  }
}

export default withRouter(Home);
