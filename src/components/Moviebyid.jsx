import React, { Component } from 'react';
import Header from './Header.jsx'

class Moviebyid extends Component {
    state = { 
        movie:[]
     }   
    
    componentDidMount() {
        this.getMovieById()
      }

      getMovieById=()=>{
        const { id } = this.props.match.params
        const url="http://localhost:8080/movies/"+id;
        return fetch(url, {
          method: "GET",
        })
          .then(res => {
            if (res.ok) {
              return res.json();    
            }
        })
        .then(data=>{
            // console.log(data[0])
              this.setState({movie:data[0]})
        })
      }
      render() { 
        const {id,name,des,runtime,genre,rating,metascore,votes,gross,director,actor,year}=this.state.movie
        // console.log(name)
        return (
            <div>
                <Header/>
            <h1>Movie Details</h1>
            <div key={id}>
                    <div>{name}</div>
                    <div>{des}</div>
                    <div>{runtime}</div>
                    <div>{genre}</div>
                    <div>{rating}</div>
                    <div>{metascore}</div>
                    <div>{votes}</div>
                    <div>{gross}</div>
                    <div>{director}</div>
                    <div>{actor}</div>
                    <div>{year}</div>
            </div>
            </div>
         );
    }
}
 
export default Moviebyid;