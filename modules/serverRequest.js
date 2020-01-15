/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
const express = require('express');

const app = express();
app.use(express.urlencoded());
app.use(express.json());

const sqlOperations = require('./movies/sqlOperations');

const sqlDOperations = require('./directors/sqlOperations');

app.listen(8080, () => { console.log('Server is running'); });

//  Movies part
const mServerController = (request, response, next) => {
  console.log('Logged in movies server');
  next();
};

app.use(mServerController);

//  Get all movies
app.get('/api/movies', (request, response) => {
  sqlOperations.getAllmovies().then((results) => {
    /* results.forEach((row) => {
      response.write(`${row.rank} ${row.title} ${row.description} ${row.runtime} ${row.genre} ${row.rating} ${row.metascore} ${row.votes} ${row.gross} ${row.director} ${row.actor} ${row.year}\n`);
    });
    response.end(); */
    if (Object.values(results).length !== 0) {
      response.send(results);
    } else {
      response.sendStatus(204);
    }
  })
    .catch((error) => {
      console.log(error);
      response.sendStatus(500);
    });
});

// Get movies by id
app.get('/api/movies/:movieid', (request, response) => {
  sqlOperations.getmoviesByID(request.params.movieid).then((results) => {
    if (Object.values(results).length !== 0) {
      response.send(results);
    } else {
      response.sendStatus(404);
    }
  })
    .catch((error) => {
      console.log(error);
      response.sendStatus(500);
    });
});

//  Delete movie by id
app.delete('/api/movies/:movieid', (request, response) => {
  sqlOperations.deletemovie(request.params.movieid).then((results) => {
    if (results.affectedRows) {
      response.sendStatus(410);
    } else {
      response.sendStatus(404);
    }
  })
    .catch((error) => {
      console.log(error);
      response.sendStatus(500);
    });
});

// Updating movie by id
app.put('/api/movies/:movieid', (request, response) => {
  const body = request.body;
  const dir = {
    title: body.title, description: body.description, runtime: body.runtime, genre: body.genre, rating: body.rating, metascore: body.metascore, votes: body.votes, gross: body.gross, director: body.director, actor: body.actor, year: body.year,
  };
  sqlOperations.updatemovie(request.params.movieid, dir.title, dir.description, dir.runtime, dir.genre, dir.rating, dir.metascore, dir.votes, dir.gross, dir.director, dir.actor, dir.year).then((results) => {
    if (results[0] === 0) {
      response.sendStatus(403);
    } else {
      response.sendStatus(202);
    }
  })
    .catch((error) => {
      console.log(error);
      response.sendStatus(409);
    });
});

// Adding a new movie
app.post('/api/movies/', (request, response) => {
  const body = request.body;
  const dir = {
    title: body.title, description: body.description, runtime: body.runtime, genre: body.genre, rating: body.rating, metascore: body.metascore, votes: body.votes, gross: body.gross, director: body.director, actor: body.actor, year: body.year,
  };
  sqlOperations.addNewmovie(dir.title, dir.description, dir.runtime, dir.genre, dir.rating, dir.metascore, dir.votes, dir.gross, dir.director, dir.actor, dir.year).then((results) => {
    if (Object.values(results).length === 0) {
      response.send(400);
    } else {
      response.send(`New movies id is: ${results[0].rank}`);
    }
  }).catch((error) => {
    console.log(error);
    response.sendStatus(409);
  });
});


// Directors path
const dServerController = (request, response, next) => {
  console.log('Logged in director server');
  next();
};

app.use(dServerController);

//  Get all directors
app.get('/api/directors', (request, response) => {
  sqlDOperations
    .getAllDirectors()
    .then((results) => {
      /* results.forEach((row) => {
        response.write(`${row.id} ${row.d_name}\n`);
      });
      response.end(); */
      if (Object.values(results).length !== 0) {
        response.send(results);
      } else {
        response.sendStatus(204);
      }
    })
    .catch((error) => {
      console.log(error);
      response.sendStatus(500);
    });
});

// Get directors by id
app.get('/api/directors/:directorid', (request, response) => {
  sqlDOperations
    .getDirectorsByID(request.params.directorid)
    .then((results) => {
      if (Object.values(results).length !== 0) {
        response.send(results);
      } else {
        response.sendStatus(404);
      }
    })
    .catch((error) => {
      console.log(error);
      response.sendStatus(500);
    });
});

//  Delete director by id
app.delete('/api/directors/:directorid', (request, response) => {
  sqlDOperations
    .deleteDirector(request.params.directorid)
    .then((results) => {
      console.log(results);
      if (results.affectedRows) {
        response.sendStatus(410);
      } else {
        response.sendStatus(404);
      }
    })
    .catch((error) => {
      console.log(error);
      response.sendStatus(500);
    });
});

// Updating director by id
app.put('/api/directors/:directorid', (request, response) => {
  const body = request.body;
  const dir = {
    name: body.name,
  };
  sqlDOperations
    .updateDirector(request.params.directorid, dir.name)
    .then((results) => {
      if (results[0] === 0) {
        response.sendStatus(403);
      } else {
        response.sendStatus(202);
      }
    })
    .catch((error) => {
      console.log(error);
      response.sendStatus(409);
    });
});

// Adding a new director
app.post('/api/directors/', (request, response) => {
  const body = request.body;
  const dir = {
    name: body.name,
  };
  sqlDOperations
    .addNewDirector(dir.name)
    .then((results) => {
      if (Object.values(results).length === 0) {
        response.send(400);
      } else {
        response.send(`New director id is: ${results[0].id}`);
      }
    })
    .catch((error) => {
      console.log(error);
      response.sendStatus(409);
    });
});
