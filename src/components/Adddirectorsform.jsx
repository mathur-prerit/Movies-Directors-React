import React, { Component } from "react";
import Header from "./Header.jsx";

import { connect } from "react-redux";

import { addDirector } from "../ReduxComponents/Directorsaction.js";

class AddDirectorsform extends Component {


  dSubmitDetails = e => {
    e.preventDefault();

    const dname = e.target[0].value;

    const inputData = {
      dname: dname,
    };

    // console.log(inputData)
    this.props.addDirector(inputData);
    e.target.reset();
  };


  render() {
    // console.log(this.props);

    return (
      <div className="popup-form" id="popup-layout">
        <Header />
        <div className="popup-content">
          <h2>Input Director Details</h2>

          <form className="edit-form-container" onSubmit={this.dSubmitDetails}>
            <div style={{ padding: "1%" }}>
              <label>Name: </label>
              <input
                id="input-name"
                type="text"
                placeholder="Director Name"
                required
              />
            </div>
            <button className="submit-btn" type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
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
  addDirector
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDirectorsform);
