import React, { Component } from "react";
import {withRouter} from 'react-router-dom'

class Directorslist extends Component {
//   state = {
//     movie: []
//   };

//   oneMovie=(e)=>{
//     const id=e.target.parentNode.parentNode.id
//     this.props.history.push('/directors/'+id)
//     // console.log(id)
//   }

  deleteDirectors = e => {
    e.preventDefault();
    const id = e.target.parentNode.parentNode.id;
    // this.props.deleteMovie(id);
  };

  render() {
    return (
      <div className="movies-containers">
        {this.props.directors.map(data => (
          <div key={data.id} className="movies-cards" id={data.id}>
            <div
              style={{ textAlign: "center", fontSize: 24 }}
            //   onClick={this.oneMovie}
            >
              <b>{data.dname}</b>  
            </div>
                        <div>
              <button className="del-btn" onClick={this.deleteDirectors}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Directorslist);
