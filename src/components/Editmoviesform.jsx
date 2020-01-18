import React, { Component } from "react";

class Editmoviesform extends Component {
  closeEditPopup = e => {
    e.target.parentNode.parentNode.style.display = "none";
    // e.target.parentNode.parentNode.parentNode.childNodes[0].style.display="block";
  };

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

    const{id}=this.props.movie;

    // console.log(editedData);
    this.props.editMovie(id,editedData);
    alert('Movie edited at:'+id)
    // e.target.reset();
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
    } = this.props.movie;

    const editPopupStyle = {
      display: "none"
    };

    return (
      <div
        className="edit-popup-form"
        id="edit-popup-layout"
        style={editPopupStyle}
      >
        <div className="edit-popup-content">
          <button
            className="close-edit-popup-button"
            onClick={this.closeEditPopup}
          >
            x
          </button>
          <h1>Edit Movie Details</h1>
          <form onSubmit={this.submitEditForm}>
            <div>
              <label>Name</label>
              <input
                id="input-name"
                type="text"
                defaultValue={name}
                placeholder="Movie name"
                required
              />
            </div>
            <div>
              <label>Description</label>
              <input
                id="input-des"
                type="text"
                defaultValue={des}
                placeholder="Movie Description"
                required
              />
            </div>
            <div>
              <div>
                <label>Runtime</label>
                <input
                  id="input-runtime"
                  type="number"
                  defaultValue={runtime}
                  placeholder="Minutes"
                  required
                />
              </div>
              <div>
                <label>Year</label>
                <input
                  id="input-year"
                  type="number"
                  defaultValue={year}
                  placeholder="YYYY"
                  required
                />
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
                  defaultValue={rating}
                  placeholder="Out of 10"
                  required
                />
              </div>
              <div>
                <label>Metascore</label>
                <input
                  id="input-metascore"
                  type="number"
                  defaultValue={metascore}
                  placeholder="Out of 100"
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label>Votes</label>
                <input
                  id="input-votes"
                  type="number"
                  defaultValue={votes}
                  placeholder="Total Votes"
                  required
                />
              </div>
              <div>
                <label>Gross Earning</label>
                <input
                  id="input-gross"
                  type="number"
                  defaultValue={gross}
                  placeholder="Million $"
                />
              </div>
            </div>
            <div>
              <div>
                <label>Director</label>
                <input
                  id="input-director"
                  type="text"
                  defaultValue={director}
                  placeholder="Director Name"
                  required
                />
              </div>
              <div>
                <label>Cast</label>
                <input
                  id="input-cast"
                  type="text"
                  defaultValue={actor}
                  placeholder="Actor/Actress"
                  required
                />
              </div>
            </div>
            <button type="submit" defaultValue="submit">
              Submit Changes
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Editmoviesform;
