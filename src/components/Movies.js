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
      //   console.log(data)
      // data.map(item => {
      //   console.log(item);
        // this.setState({ movies: [...this.state.movies, item] });
        // return item;
      // });
      // this.setState({movies:[{})
      //   this.setState({ movies:[...this.state.movies,{}] })
    });
  //   .then(() => console.log(this.state.movies));
  }

  addMovies=(data)=>{
    // const y=JSON.stringify(data)
    // console.log(data)
    // console.log(data)
    // for(let item in data){
    //   console.log(data[item])
    // }
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
      .then(()=>alert('Item deleted at:'+id))
      .then(() => this.getAllMovies());
    
  }

  render() {
    return (
      <div>
      <Header/>
      <Addmoviesbutton addMovies={this.addMovies}/>
      <Movieslist movies={this.state.movies} deleteMovie={this.deleteMovie}/>
      </div>
    );
  }
}

export default Movies;
