import React, { Component } from "react";
import Header from "./Header.jsx";
import { withRouter } from "react-router-dom";

class Editmoviesform extends Component {
  state = {
    movie: []
  };

  componentDidMount() {
    this.getMovieById();
  }

  submitEditForm = e => {
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

    const editedData = {
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

    const { id } = this.state.movie;

    // console.log(editedData);
    // console.log(id)
    this.editMovie(id, editedData);
    alert("Movie edited at:" + id);
    this.props.history.push("/movies/" + id);

    // e.target.reset();
  };

  editMovie = (id, data) => {
    const url = "http://localhost:8080/movies/" + id + "/edit";
    return fetch(url, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  getMovieById = () => {
    const { id } = this.props.match.params;
    // console.log(id)
    const url = "http://localhost:8080/movies/" + id;
    return fetch(url, {
      method: "GET"
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        // console.log(data)
        this.setState({ movie: data[0] });
      });
  };

  render() {
    const {
      name,
      des,
      runtime,
      rating,
      metascore,
      votes,
      gross,
      director,
      actor,
      year
    } = this.state.movie;

    // const editPopupStyle = {
    //   display: "none"
    // };

    return (
      <div className="popup-form" id="edit-popup-layout">
        <Header />
        <div className="edit-popup-content">
          <h2>Edit Movie Details</h2>
          <form className="edit-form-container" onSubmit={this.submitEditForm}>
            <div style={{ padding: "0.5%" }}>
              <label>Name: </label>
              <input
                id="input-name"
                type="text"
                defaultValue={name}
                placeholder="Movie name"
                required
              />
            </div>
            <div style={{ padding: "0.5%" }}>
              <label>Description: </label>
              <input
                style={{ width: "800px", height: "20px" }}
                id="input-des"
                type="text"
                defaultValue={des}
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
                  defaultValue={runtime}
                  placeholder="Minutes"
                  required
                />
              </div>
              <div>
                <label>Year: </label>
                <input
                  id="input-year"
                  type="number"
                  defaultValue={year}
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
                  defaultValue={rating}
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
                  defaultValue={metascore}
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
                  defaultValue={votes}
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
                  defaultValue={gross}
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
                  defaultValue={director}
                  placeholder="Director Name"
                  required
                />
              </div>
              <div>
                <label>Cast: </label>
                <input
                  id="input-cast"
                  type="text"
                  defaultValue={actor}
                  placeholder="Actor/Actress"
                  required
                />
              </div>
            </div>
            <button className="submit-btn" type="submit" value="submit">
              Submit Changes
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Editmoviesform);
