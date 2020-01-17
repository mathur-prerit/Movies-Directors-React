import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movieslist extends Component {

  deleteMovies = e => {
    e.preventDefault();
    // console.log(e.target.parentNode.parentNode.id);
    const id = e.target.parentNode.parentNode.id;
    this.props.deleteMovie(id);
  };

  editMovieForm=(e)=>{
    console.log('hgf')
  }

  movieByID = e => {
    e.preventDefault();
    const id = e.target.parentNode.parentNode.id;
    // console.log(id);
    this.props.getMovieById(id)
    // <Link to="/directors/">Directors</Link>
  };

  state = {};
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
      </div>
    );
  }
}

export default Movieslist;
