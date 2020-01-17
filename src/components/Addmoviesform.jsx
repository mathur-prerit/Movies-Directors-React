import React, { Component } from "react";
class Addmoviesform extends Component {
  state = {};

  closePopup = e => {
    // e.preventDefault();
    // console.log(e.target.parentNode.style)
    // const hide=document.getElementById('popup-layout')
    e.target.parentNode.parentNode.style.display = "none";
  };

  SubmitDetails = e => {
    e.preventDefault();
    const name = document.getElementById("input-name").value;
    const des = document.getElementById("input-des").value;
    const runtime = document.getElementById("input-runtime").value;
    const genre = document.getElementById("input-genre").value;
    const rating = document.getElementById("input-rating").value;
    const metascore = document.getElementById("input-metascore").value;
    const votes = document.getElementById("input-votes").value;
    const gross = document.getElementById("input-gross").value;
    const director = document.getElementById("input-director").value;
    const actor = document.getElementById("input-cast").value;
    const year = document.getElementById("input-year").value;


    const inputData = {
      name: name,
      des: des,
      runtime: runtime,
      genre: genre,
      rating: rating,
      metascore: metascore,
      votes: votes,
      gross: gross,
      director: director,
      actor: actor,
      year: year
    };

    this.props.addMovies(inputData);
    e.target.reset();
  };

  render() {
    const popupStyle = {
      display: "none"
    };

    return (
      <div className="popup-form" id="popup-layout" style={popupStyle}>
        <div className="popup-content">
          <button className="close-popup-button" onClick={this.closePopup}>
            x
          </button>
          <h1>Input Movie Details</h1>

          <form onSubmit={this.SubmitDetails}>
            <div>
              <label>Name</label>
              <input
                id="input-name"
                type="text"
                placeholder="Movie Name"
                required
              />
            </div>
            <div>
              <label>Description</label>
              <input
                id="input-des"
                type="text"
                placeholder="Movie Description"
              />
            </div>
            <div>
              <div>
                <label>Runtime</label>
                <input id="input-runtime" type="number" placeholder="Minutes" />
              </div>
              <div>
                <label>Year</label>
                <input id="input-year" type="number" placeholder="YYYY" />
              </div>
              <div>
                <select id="input-genre" selected="">
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
            </div>
            <div>
              <div>
                <label>Rating</label>
                <input
                  id="input-rating"
                  type="number"
                  placeholder="Out of 10"
                />
              </div>
              <div>
                <label>Metascore</label>
                <input
                  id="input-metascore"
                  type="number"
                  placeholder="Out of 100"
                />
              </div>
            </div>
            <div>
              <div>
                <label>Votes</label>
                <input
                  id="input-votes"
                  type="number"
                  placeholder="Total Votes"
                />
              </div>
              <div>
                <label>Gross Earning</label>
                <input id="input-gross" type="number" placeholder="Million $" />
              </div>
            </div>
            <div>
              <div>
                <label>Director</label>
                <input
                  id="input-director"
                  type="text"
                  placeholder="Director Name"
                />
              </div>
              <div>
                <label>Cast</label>
                <input
                  id="input-cast"
                  type="text"
                  placeholder="Actor/Actress"
                />
              </div>
            </div>
            <button type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Addmoviesform;
