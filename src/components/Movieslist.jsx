import React, { Component } from "react";
import Editmoviesform from "./Editmoviesform.jsx";

class Movieslist extends Component {
  state = {
    movie: []
  };

  deleteMovies = e => {
    e.preventDefault();
    const id = e.target.parentNode.parentNode.id;
    this.props.deleteMovie(id);
  };

  editMovieForm = e => {
    e.preventDefault();
    const id = e.target.parentNode.parentNode.id;
    const popup = document.getElementById("edit-popup-layout");
    popup.style.display = "block";
    // await this.setState({ids:id})
    this.getMovieById(id);
  };

  getMovieById = id => {
    // const { id } = this.props.match.params
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
        this.setState({ movie: data[0] });
      });
  };

  render() {
    return (
      <div className="movies-containers">
        {this.props.movies.map(data => (
          <div key={data.id} className="movies-cards" id={data.id}>
            <div
              style={{ textAlign: "center", fontSize: 24 }}
              onClick={this.movieByID}
            >
              <b>{data.name}</b>
            </div>
            <div>
              <b>Description: </b>
              {data.des}
            </div>
            <div>
              <b>Runtime: </b>
              {data.runtime}
            </div>
            <div>
              <b>Genre: </b>
              {data.genre}
            </div>
            <div>
              <b>Rating: </b>
              {data.rating}
            </div>
            <div>
              <b>Metascore: </b>
              {data.metascore}
            </div>
            <div>
              <b>Votes: </b>
              {data.votes}
            </div>
            <div>
              <b>Gross: </b>${data.gross} Million
            </div>
            <div>
              <b>Director: </b>
              {data.director}
            </div>
            <div>
              <b>Cast: </b>
              {data.actor}
            </div>
            <div>
              <b>Year: </b>
              {data.year}
            </div>
            <div>
              <button onClick={this.editMovieForm}>Edit</button>
              <button onClick={this.deleteMovies}>Delete</button>
            </div>
          </div>
        ))}
        <Editmoviesform
          movie={this.state.movie}
          editMovie={this.props.editMovie}
        />
      </div>
    );
  }
}

export default Movieslist;
