const {
  getdirectorsByID,
  getAllDirectors,
  addNewdirector,
  updatedirector,
  deletedirector
} = require("../database/Directors.js");

//  Get all directors
const allDirectors = (req, res) => {
  getAllDirectors()
    .then(results => {
      if (Object.values(results).length !== 0) {
        res.send(results);
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      console.log({ message: `${error} in getting all directors` });
      res.sendStatus(500);
    });
};

// Get director by id
const directorByID = (req, res) => {
  if (Number.isInteger(parseInt(req.params.directorid)) === false) {
    console.log("number not provided");
    res.sendStatus(412);
    console.log({ message: "Incorrect parameter passed" });
  } else {
    console.log("Prarameter validated");
    getdirectorsByID(req.params.directorid)
      .then(results => {
        if (results !== null) {
          res.send(results);
        } else if (results === null) {
          res.sendStatus(404);
        }
      })
      .catch(error => {
        console.log({ message: `${error.stack} in getting director by id` });
        res.sendStatus(500);
      });
  }
};

// Deleting director by id
const deleteDirector = (req, res) => {
  // console.log(req.params.directorid)
  if (Number.isInteger(parseInt(req.params.directorid)) === false) {
    console.log("number not provided");
    res.sendStatus(412);
    console.log({ message: "Incorrect parameter passed" });
  } else {
    console.log("Prarameter validated");
    deletedirector({ id: req.params.directorid })
      .then(results => {
        console.log(results);
        if (results === 1) {
          res.sendStatus(410);
        } else {
          res.sendStatus(404);
        }
      })
      .catch(error => {
        console.log({ message: `${error} in deleting director by id` });
        res.sendStatus(500);
      });
  }
};

// Adding a new director
const addDirector = (req, res) => {
  let { body } = req;
  // console.log(body)
  addNewdirector(body)
    .then(results => {
      if (Object.values(results).length === 0) {
        res.send(400);
      } else {
        //  const id=JSON.stringify(results[0].id);
        res.send(JSON.stringify(results[0].id));
      }
    })
    .catch(error => {
      console.log({ message: `${error} in adding a new director` });
      res.sendStatus(409);
    });
};

// Updating a new director
const updateDirector = (req, res) => {
  if (Number.isInteger(parseInt(req.params.directorid)) === false) {
    console.log("number not provided");
    res.sendStatus(412);
    console.log({ message: "Incorrect parameter passed" });
  } else {
    console.log("Prarameter validated");
    const { body } = req;
    updatedirector({ id: req.params.directorid }, body)
      .then(() => {
        // console.log(results)
        // console.log(JSON.stringify(results[0]));
        res.sendStatus(202);
      })
      .catch(error => {
        console.log({ message: `${error} in updating director by id` });
        res.sendStatus(409);
      });
  }
};

module.exports = {
  allDirectors,
  directorByID,
  deleteDirector,
  addDirector,
  updateDirector
};
