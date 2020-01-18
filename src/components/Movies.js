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

  addMovies=(data)=>{
   const url="http://localhost:8080/movies";
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => alert('Movies added at:'+data))
      .then(() => this.getAllMovies());
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

  editMovie=(id,data)=>{
    const url="http://localhost:8080/movies/"+id;
    return fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
    })
  }


  render() {
    return (
      <div>
      <Header/>
      <Addmoviesbutton addMovies={this.addMovies}/>
      <Movieslist movies={this.state.movies} deleteMovie={this.deleteMovie} editMovie={this.editMovie}/>
      </div>
    );
  }
}

export default Movies;
