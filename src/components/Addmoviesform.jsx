import React, { Component } from "react";
class Addmoviesform extends Component {

  state = {};

  SubmitDetails=(e)=>{
    e.preventDefault();
    const data=document.getElementById('movies-details')
    console.log(data)
  }


  render() {

    const popupStyle={
      display:'none'
    }

    return (
      <div className="popup-form" id="popup-layout" style={popupStyle}>
        <div className="popup-content">
          <h1>Input Movie Details</h1>
          <form id='movies-details'>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Movie Name"></input>
            </div>
            <div>
              <label>Description</label>
              <input type="text" placeholder="Movie Description"></input>
            </div>
            <div>
              <label>Runtime</label>
              <input type="number" placeholder="Minutes"></input>
              <label>Year</label>
              <input type="number" placeholder="YYYY"></input>
              <label>Genre</label>
              <select selected="">
                <option value="">Select a Genre</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Animation">Animation</option>
                <option value="Biography">Biography</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Mystery">Mystery</option>
                <option value="Western">Western</option>
              </select>
            </div>
            <div>
              <label>Votes</label>
              <input type="number" placeholder="Total Votes"></input>
              <label>Gross Earning</label>
              <input type="number" placeholder="Million $"></input>
            </div>
            <div>
              <label>Director</label>
              <input type="text" placeholder="Director Name"></input>
              <label>Cast</label>
              <input type="text" placeholder="Actor/Actress"></input>
            </div>
            <button onClick={this.SubmitDetails}>Submit</button>
          </form>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Addmoviesform;
