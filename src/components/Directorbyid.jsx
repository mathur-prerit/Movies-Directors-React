import React, { Component } from "react";
import Header from "./Header.jsx";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { getDirectorById } from "../ReduxComponents/Directorsaction.js";

class Directorbyid extends Component {
  componentDidMount() {
    this.getDirectorData();
  }

    editDirectorForm = e => {
    //   const id=e.target.parentNode.parentNode
    const { id } = this.props.match.params;
    // console.log(id)
      this.props.history.push("/directors/"+id+"/edit")
    };

  getDirectorData = async () => {
    const { id } = this.props.match.params;
    // console.log(id)
    await this.props.getDirectorById(id);
  };

  render() {
    const {
      id,
      dname
    } = this.props.director;
    return (
      <div className="popup-form">
        <Header />
        <h2>Movie Details</h2>
        <div key={id} className="edit-form-container">
          <h3>{dname}</h3>
        <button className="submit-btn" onClick={this.editDirectorForm}>
          Edit
        </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    director: state.director
  };
};

const mapDispatchToProps = {
  getDirectorById
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Directorbyid));
