import React, { Component } from "react";

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
        });
        // this.setState({movies:[{})
        //   this.setState({ movies:[...this.state.movies,{}] })
      });
    //   .then(() => console.log(this.state.movies));
  }

  render() {
    return (
      <div>
        {this.state.movies.map(data => (
          // console.log(data)
          <div key={data.id}>
            <div>{data.name}</div>
            <div>{data.des}</div>
            <div>{data.runtime}</div>
            <div>{data.genre}</div>
            <div>{data.rating}</div>
            <div>{data.metascore}</div>
            <div>{data.votes}</div>
            <div>{data.gross}</div>
            <div>{data.director}</div>
            <div>{data.actor}</div>
            <div>{data.year}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Movies;
