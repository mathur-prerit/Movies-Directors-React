import React, { Component } from "react";
import Header from "./Header.jsx";
import {withRouter} from "react-router-dom";

class Moviebyid extends Component {
  state = {
    movie: []
  };

  componentDidMount() {
    this.getMovieById();
  }

  editMovieForm = e => {
    const id=this.state.movie.id
    // console.log(id)
    this.props.history.push("/movies/"+id+"/edit")
  };

  getMovieById = () => {
    const { id } = this.props.match.params;
    const url = "http://localhost:8080/movies/" + id;
    return fetch(url, {
      method: "GET"
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        // console.log(data[0])
        this.setState({ movie: data[0] });
      });
  };

  render() {
    const {
      id,
      name,
      des,
      runtime,
      genre,
      rating,
      metascore,
      votes,
      gross,
      director,
      actor,
      year
    } = this.state.movie;

    return (
      <div class="popup-form">
        <Header />
        <h2>Movie Details</h2>
        <div key={id} class="edit-form-container">
          <h3>{name}</h3>
          <div>{des}</div>
          <div>{runtime}</div>
          <div>{genre}</div>
          <div>{rating}</div>
          <div>{metascore}</div>
          <div>{votes}</div>
          <div>{gross}</div>
          <div>{director}</div>
          <div>{actor}</div>
          <div>{year}</div>
        <button className="submit-btn" onClick={this.editMovieForm}>Edit</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Moviebyid);
