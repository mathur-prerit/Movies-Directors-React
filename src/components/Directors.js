import React, { Component } from "react";
import Header from "./Header.jsx";

import { connect } from "react-redux";
import createSagaMiddleware from 'redux-saga'

import {getAllDirectors} from '../ReduxComponents/Directorsaction.js'

class Directors extends Component {
//   state = {};

  componentDidMount() {
    // getAllDirectors();
  }
  
  
  // deleteMovie = id => {
  //   const url = "http://localhost:8080/directors/" + id;
  //   return fetch(url, {
  //     method: "DELETE"
  //   })
  //   .then(res => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //   })
  //   .then(() => alert("Movie deleted at:" + id))
  //   .then(() => this.getAllDirectors());
  // };
  
  render() {
    const { movies,getAllDirectors } = this.props;
    console.log(movies)
    return (
      <div>
        <Header />
        <button onClick={getAllDirectors}>get data</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      movies: state.movies
    };
  };

  const mapDispatchToProps={
    getAllDirectors
      };



export default connect(mapStateToProps,mapDispatchToProps)(Directors);
