const {
  getmoviesByID,
  getAllMovies,
  addNewmovie,
  updatemovie,
  deletemovie
} = require("../database/Movies.js");

//  Get all Movies
const allMovies = (req, res) => {
  getAllMovies()
    .then(results => {
      if (Object.values(results).length !== 0) {
        res.send(results);
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      console.log({ message: `${error} in getting all movies` });
      res.sendStatus(500);
    });
};

// Get Movie by id
const movieByID = (req, res) => {
  if (Number.isInteger(parseInt(req.params.movieid)) === false) {
    console.log("number not provided");
    res.sendStatus(412);
    console.log({ message: "Incorrect parameter passed" });
  } else {
    console.log("Prarameter validated");
    getmoviesByID(req.params.movieid)
      .then(results => {
        if (results !== null) {
          res.send(results);
        } else if (results === null) {
          res.sendStatus(404);
        }
      })
      .catch(error => {
        console.log({ message: `${error.stack} in getting movie by id` });
        res.sendStatus(500);
      });
  }
};

// Deleting Movie by id
const deleteMovie = (req, res) => {
  // console.log(req.params.movieid)
  if (Number.isInteger(parseInt(req.params.movieid)) === false) {
    console.log("number not provided");
    res.sendStatus(412);
    console.log({ message: "Incorrect parameter passed" });
  } else {
    console.log("Prarameter validated");
    deletemovie({ id: req.params.movieid })
      .then(results => {
        console.log(results);
        if (results === 1) {
          res.sendStatus(410);
        } else {
          res.sendStatus(404);
        }
      })
      .catch(error => {
        console.log({ message: `${error} in deleting movie by id` });
        res.sendStatus(500);
      });
  }
};

// Adding a new Movie
const addMovie = (req, res) => {
  let { body } = req;
  addNewmovie(body)
    .then(results => {
      if (Object.values(results).length === 0) {
        res.send(400);
      } else {
        //  const id=JSON.stringify(results[0].id);
        res.send(JSON.stringify(results[0].id));
      }
    })
    .catch(error => {
      console.log({ message: `${error} in adding a new movie` });
      res.sendStatus(409);
    });
};

// Updating a new Movie
const updateMovie = (req, res) => {
  if (Number.isInteger(parseInt(req.params.movieid)) === false) {
    console.log("number not provided");
    res.sendStatus(412);
    console.log({ message: "Incorrect parameter passed" });
  } else {
    console.log("Prarameter validated");
    const { body } = req;
    updatemovie({ id: req.params.movieid }, body)
      .then(() => {
        // console.log(results)
        // console.log(JSON.stringify(results[0]));
        res.sendStatus(202);
      })
      .catch(error => {
        console.log({ message: `${error} in updating movie by id` });
        res.sendStatus(409);
      });
  }
};

module.exports = {
  allMovies,
  movieByID,
  deleteMovie,
  addMovie,
  updateMovie
};
