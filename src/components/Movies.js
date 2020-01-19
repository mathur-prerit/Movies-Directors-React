import React, { Component } from "react";

import Header from "./Header.jsx"
import Addmoviesbutton from './Addmovies.jsx'
import Movieslist from "./Movieslist.jsx"



class Movies extends Component {
  state = {
    movies: []
  };


  componentDidMount() {
    this.getAllMovies()
  }

  getAllMovies=()=>{
    const url="http://localhost:8080/movies"
    return fetch(url,{
      method:'GET'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({movies:data})
    });
  }

  deleteMovie=(id)=>{
    const url="http://localhost:8080/movies/"+id;
    return fetch(url, {
      method: "DELETE",
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(()=>alert('Movie deleted at:'+id))
      .then(() => this.getAllMovies());
  }


  render() {
    return (
      <div className="master">
      <Header/>
      <Addmoviesbutton/>
      <Movieslist movies={this.state.movies} deleteMovie={this.deleteMovie}/>
      </div>
    );
  }
}

export default Movies;
