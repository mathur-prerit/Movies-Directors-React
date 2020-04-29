const express = require("express");
const cors = require("cors");
const path = require('path')

const {
  allDirectors,
  directorByID,
  deleteDirector,
  addDirector,
  updateDirector
} = require("./src/server/directors.js");

const {
  allMovies,
  movieByID,
  deleteMovie,
  addMovie,
  updateMovie
} = require("./src/server/movies.js");

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

// Database connection check
// db.authenticate()
//   .then((err) => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.log('Unable to connect to the database:', err);
//   });

// //  Default index
// app.get('/', (req, res) => res.send('Welcome to home page'));


app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//  directors route
app.get("/directors", allDirectors);
app.get("/directors/:directorid", directorByID);
app.delete("/directors/:directorid", deleteDirector);
app.post("/directors/add", addDirector);
app.put("/directors/:directorid/edit", updateDirector);

// //  movies route
app.get("/movies", allMovies);
app.get("/movies/:movieid", movieByID);
app.delete("/movies/:movieid", deleteMovie);
app.post("/movies/add", addMovie);
app.put("/movies/:movieid/edit", updateMovie);

// Error URL
app.get('*', (req, res) => res.status(200).send('You ended up on wrong URL'));

//  Listening port
app.listen(port);
console.log(`Server is running at: ${port}`);