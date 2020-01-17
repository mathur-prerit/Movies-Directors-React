import React, { Component } from "react";

class Movieslist extends Component {
  deleteMovies = e => {
    e.preventDefault();
    // console.log(e.target.parentNode.parentNode.id);
    const id=e.target.parentNode.parentNode.id
    this.props.deleteMovie(id)
  };

  state = {};
  render() {
    return (
      <div className="movies-containers">
        {this.props.movies.map(data => (
          <div key={data.id} className="movies-cards" id={data.id}>
            <div style={{ textAlign: "center", fontSize: 24 }}>
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
              <button>Edit</button>
              <button onClick={this.deleteMovies}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Movieslist;
