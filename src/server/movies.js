// import Movies from '../database/Movies.js'
const {
  getmoviesByID,
  getAllMovies,
  addNewmovie,
  updatemovie,
  deletemovie
} = require("../database/Movies.js");

// const mysql = require('mysql');

// Database Connection Part
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'prerit',
//   password: '123',
//   database: 'moviesReact',
// });

//  Get all Movies
const allMovies = (req, res) => {
  getAllMovies()
    .then(results => {
      /* results.forEach((row) => {
          response.write(`${row.id} ${row.d_name}\n`);
        });
        response.end(); */
      if (Object.values(results).length !== 0) {
        // console.log(results)
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
    Movies.findOne({ where: { id: req.params.movieid } })
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
  console.log(req.params.movieid)
  if (Number.isInteger(parseInt(req.params.movieid)) === false) {
    console.log("number not provided");
    res.sendStatus(412);
    console.log({ message: "Incorrect parameter passed" });
  } else {
    console.log("Prarameter validated");
    deletemovie ({ id: req.params.movieid })
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
  // console.log(body)
  // console.log(JSON.parse(body))


  for(let item in body){
    if(!body[item].length){
      body[item]=null;
    }
    // console.log(typeof body[item])
  }

  // const dir = {
  //   name: body.name,
  //   des: body.des,
  //   runtime: body.runtime,
  //   genre: body.genre,
  //   rating: body.rating,
  //   metascore: body.metascore,
  //   votes: body.votes,
  //   gross: body.gross,
  //   director: body.director,
  //   actor: body.actor,
  //   year: body.year
  // };
  // console.log(dir)
  addNewmovie(body)
    .then(results => {
      if (Object.values(results).length === 0) {
        res.send(400);
      } else {
        //  console.log(JSON.stringify(results));
        res.send(`New Movie id is: ${results.id}`);
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
    const body = req.body;
    const dir = {
      rank: body.rank,
      name: body.name,
      des: body.des,
      runtime: body.runtime,
      genre: body.genre,
      rating: body.rating,
      metascore: body.metascore,
      votes: body.votes,
      gross: body.gross,
      director: body.director,
      actor: body.actor,
      year: body.year
    };
    Movies.update(
      {
        rank: dir.rank,
        name: dir.name,
        des: dir.des,
        runtime: dir.runtime,
        genre: dir.genre,
        rating: dir.rating,
        metascore: dir.metascore,
        votes: dir.votes,
        gross: dir.gross,
        director: dir.director,
        actor: dir.actor,
        year: dir.year
      },
      { where: { id: req.params.movieid } }
    )
      .then(results => {
        console.log(JSON.stringify(results[0]));
        if (results[0] === 0) {
          res.sendStatus(403);
        } else {
          res.sendStatus(202);
        }
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
