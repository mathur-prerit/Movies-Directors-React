import React, { Component } from "react";
import Header from "./Header.jsx"
import Addmoviesbutton from './Addmovies.jsx'
import Movieslist from "./Movieslist.jsx"


class Movies extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch("http://localhost:8080/movies")
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

  render() {
    return (
      <div>
      <Header/>
      <Addmoviesbutton/>
      <Movieslist movies={this.state.movies}/>
      </div>
    );
  }
}

export default Movies;
