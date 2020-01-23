import React, { Component } from "react";
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";

import { getAllDirectors,deleteDirector } from "../ReduxComponents/Directorsaction.js";

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
  const id = parseInt(e.target.parentNode.parentNode.id);
  // console.log('here')
  this.props.deleteDirector(id);
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

const mapStateToProps = state => {
  return {
    directors: state.directors
  };
};

const mapDispatchToProps = {
   deleteDirector,
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Directorslist));
