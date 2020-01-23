import React, { Component } from "react";
import Header from "./Header.jsx";
import Adddirectorsbutton from "./Adddirectors.jsx";
import Directorslist from "./Directorslist";

import { connect } from "react-redux";

import { getAllDirectors,deleteDirector } from "../ReduxComponents/Directorsaction.js";

class Directors extends Component {
  //   state = {};

  componentDidMount() {
    this.props.getAllDirectors();
  }


  render() {
    const { directors, getAllDirectors } = this.props;
    // console.log(directors)
    return (
      <div>
        <Header />
        <Adddirectorsbutton />
        <Directorslist directors={directors} refresh={this.props.getAllDirectors}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    directors: state.directors
  };
};

const mapDispatchToProps = {
  getAllDirectors
};

export default connect(mapStateToProps, mapDispatchToProps)(Directors);
