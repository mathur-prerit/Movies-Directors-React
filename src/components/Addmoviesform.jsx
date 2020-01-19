import React, { Component } from "react";
import Header from "./Header.jsx";

class Addmoviesform extends Component {
  state = {};

  // closePopup = e => {
  //   // e.preventDefault();
  //   // console.log(e.target.parentNode.style)
  //   // const hide=e.target
  //   e.target.parentNode.parentNode.style.display = "none";
  //   e.target.parentNode.parentNode.parentNode.childNodes[0].style.display =
  //     "block";
  // };

  SubmitDetails = e => {
    e.preventDefault();

    const name = e.target[0].value;
    const des = e.target[1].value;
    const runtime = e.target[2].value;
    const year = e.target[3].value;
    const genre = e.target[4].value;
    const rating = e.target[5].value;
    const metascore = e.target[6].value;
    const votes = e.target[7].value;
    const gross = e.target[8].value;
    const director = e.target[9].value;
    const actor = e.target[10].value;

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

    // console.log(inputData)
    this.addMovies(inputData);
    e.target.reset();
  };

  addMovies = data => {
    const url = "http://localhost:8080/movies/add";
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => alert("Movies added at:" + data));
  };

  render() {
    // const popupStyle = {
    //   display: "none"
    // };

    return (
      <div className="popup-form" id="popup-layout">
        <Header />
        <div className="popup-content">
          <h2>Input Movie Details</h2>

          <form className="edit-form-container" onSubmit={this.SubmitDetails}>
            <div style={{ padding: "0.5%" }}>
              <label>Name: </label>
              <input
                id="input-name"
                type="text"
                placeholder="Movie Name"
                required
              />
            </div>
            <div style={{ padding: "0.5%" }}>
              <label>Description: </label>
              <input
              style={{ width: "800px", height: "20px" }}
                id="input-des"
                type="text"
                placeholder="Movie Description"
                required
              />
            </div>
            <div className="edit-form-items">
              <div>
                <label>Runtime: </label>
                <input
                  id="input-runtime"
                  type="number"
                  placeholder="Minutes"
                  required
                />
              </div>
              <div>
                <label>Year: </label>
                <input
                  id="input-year"
                  type="number"
                  placeholder="YYYY"
                  required
                />
              </div>
              <div>
                <select id="input-genre" selected="" required>
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
            <div className="edit-form-items">
              <div>
                <label>Rating: </label>
                <input
                  id="input-rating"
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  placeholder="Out of 10"
                  required
                />
              </div>
              <div>
                <label>Metascore: </label>
                <input
                  id="input-metascore"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  placeholder="Out of 100"
                  required
                />
              </div>
            </div>
            <div className="edit-form-items">
              <div>
                <label>Votes: </label>
                <input
                  id="input-votes"
                  type="number"
                  placeholder="Total Votes"
                  required
                />
              </div>
              <div>
                <label>Gross Earning: </label>
                <input
                  id="input-gross"
                  type="number"
                  step="0.01"
                  placeholder="Million $"
                />
              </div>
            </div>
            <div className="edit-form-items">
              <div>
                <label>Director: </label>
                <input
                  id="input-director"
                  type="text"
                  placeholder="Director Name"
                  required
                />
              </div>
              <div>
                <label>Cast: </label>
                <input
                  id="input-cast"
                  type="text"
                  placeholder="Actor/Actress"
                  required
                />
              </div>
            </div>
            <button className="submit-btn" type="submit" value="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Addmoviesform;
