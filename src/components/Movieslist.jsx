import React, { Component } from "react";
// import Editmoviesform from "./Editmoviesform.jsx";
import {withRouter} from 'react-router-dom'

class Movieslist extends Component {
  state = {
    movie: []
  };

  oneMovie=(e)=>{
    const id=e.target.parentNode.parentNode.id
    this.props.history.push('/movies/'+id)
    // console.log(id)

  }

  deleteMovies = e => {
    e.preventDefault();
    const id = e.target.parentNode.parentNode.id;
    this.props.deleteMovie(id);
  };

  render() {
    return (
      <div className="movies-containers">
        {this.props.movies.map(data => (
          <div key={data.id} className="movies-cards" id={data.id}>
            <div
              style={{ textAlign: "center", fontSize: 24 }}
              onClick={this.oneMovie}
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
              <button className="del-btn" onClick={this.deleteMovies}>Delete</button>
            </div>
          </div>
        ))}
        {/* <Editmoviesform
          movie={this.state.movie}
          editMovie={this.props.editMovie}
        /> */}
      </div>
    );
  }
}

export default withRouter(Movieslist);
