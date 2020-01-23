import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { deleteDirector } from "../ReduxComponents/Directorsaction.js";

class Directorslist extends Component {

  oneDirector = e => {
    const id = e.target.parentNode.parentNode.id;
    this.props.history.push("/directors/" + id);
  };

  deleteDirectors = e => {
    e.preventDefault();
    const id = parseInt(e.target.parentNode.parentNode.id);
    this.props.deleteDirector(id);
    this.props.refresh();
  };

  render() {
    return (
      <div className="movies-containers">
        {this.props.directors.map(data => (
          <div key={data.id} className="movies-cards" id={data.id}>
            <div
              style={{ textAlign: "center", fontSize: 24 }}
              onClick={this.oneDirector}
            >
              <b>{data.dname}</b>
            </div>
            <div>
              <button className="del-btn" onClick={this.deleteDirectors}>
                Delete
              </button>
            </div>
          </div>
        ))}
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
  deleteDirector
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Directorslist));
