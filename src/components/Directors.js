import React, { Component } from "react";
import Header from "./Header.jsx";
import Adddirectorsbutton from './Adddirectors.jsx'
import Directorslist from "./Directorslist"

import { connect } from "react-redux";

import {getAllDirectors} from '../ReduxComponents/Directorsaction.js'

class Directors extends Component {
//   state = {};

  // componentDidMount() {
  //   getAllDirectors();
  // }
  
  
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
    const { directors,getAllDirectors } = this.props;
    console.log(directors)
    return (
      <div>
        <Header />
        <button onClick={getAllDirectors}>get data</button>
        <Adddirectorsbutton/>
        <Directorslist directors={directors}/>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      directors: state.directors
    };
  };

  const mapDispatchToProps={
    getAllDirectors
      };



export default connect(mapStateToProps,mapDispatchToProps)(Directors);
