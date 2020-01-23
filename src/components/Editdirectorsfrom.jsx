import React, { Component } from "react";
import Header from "./Header.jsx";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { editDirector } from "../ReduxComponents/Directorsaction.js";

class EditDirectorsform extends Component {


//   componentDidMount() {
//     this.getMovieById();
//   }

  submitEditForm = e => {
    e.preventDefault();
    const dname = e.target[0].value;


    const editedData = {
      dname: dname,
    };

    // const { id } = this.props;
    const { id } = this.props.match.params;
    // console.log(editedData);
    // console.log(id)
    this.props.editDirector(id, editedData);
    alert("Director edited at:" + id);
    this.props.history.push("/directors/" + id);

    // e.target.reset();
  };

//   editMovie = (id, data) => {
//     const url = "http://localhost:8080/movies/" + id + "/edit";
//     return fetch(url, {
//       method: "PUT",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(data)
//     });
//   };

//   getMovieById = () => {
//     const { id } = this.props.match.params;
//     // console.log(id)
//     const url = "http://localhost:8080/movies/" + id;
//     return fetch(url, {
//       method: "GET"
//     })
//       .then(res => {
//         if (res.ok) {
//           return res.json();
//         }
//       })
//       .then(data => {
//         // console.log(data)
//         this.setState({ movie: data[0] });
//       });
//   };

  render() {
    // const {
    //   name,
    // } = this.state.movie;

    // const editPopupStyle = {
    //   display: "none"
    // };

    return (
      <div className="popup-form" id="edit-popup-layout">
        <Header />
        <div className="edit-popup-content">
          <h2>Edit Director Details</h2>
          <form className="edit-form-container" onSubmit={this.submitEditForm}>
            <div style={{ padding: "1%" }}>
              <label>Name: </label>
              <input
                id="input-name"
                type="text"
                defaultValue=''
                // {name}
                placeholder="Movie name"
                required
              />
            </div>
            <button className="submit-btn" type="submit" value="submit">
              Submit Changes
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
    editDirector
  };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditDirectorsform));
