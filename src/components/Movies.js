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
    .then(response => response.json())
    .then(data => {
      //   console.log(data)
      data.map(item => {
      //   console.log(item);
        this.setState({ movies: [...this.state.movies, item] });
        return item;
      });
      // this.setState({movies:[{})
      //   this.setState({ movies:[...this.state.movies,{}] })
    });
  //   .then(() => console.log(this.state.movies));
  }

  addMovies=(data)=>{
    // console.log(data)
    for(let item in data){
      console.log(data[item])
    }
    // let ENAME = theItem;
    // url = `https://api.trello.com/1/cards/${LID}?name=${ENAME}&key=${API_KEY}&token=${TOKEN}`;
  
    // return fetch(url, {
    //   method: "PUT"
    // })
    //   .then(res => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //   })
    //   .then(() => update());
  }

  render() {
    return (
      <div>
      <Header/>
      <Addmoviesbutton addMovies={this.addMovies}/>
      <Movieslist movies={this.state.movies}/>
      </div>
    );
  }
}

export default Movies;
