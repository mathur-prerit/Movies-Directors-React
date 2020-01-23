//  Libraries requirements
const mysql = require('mysql');

// Database Connection Part
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'prerit',
  password: '123',
  database: 'moviesReact',
});

//  Initiating database connection
connection.connect();

//  Logic part for inserting data in sql tables
// Getting all the directors
const getAllDirectors = () => {
    return new Promise ((resolve, reject) => {
      connection.query('select * from directors', (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  };

// Getting directors by id
const getdirectorsByID = (directorid) => {
    return new Promise ((resolve, reject) => {
      connection.query(`select * from directors where id=${directorid}`, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  };

  // Inserting a new director
const addNewdirector = (body) => {
    const dname= body.dname
  return new Promise ((resolve, reject) => {
    //  console.log(`${name}','${des}',${runtime},'${genre}',${rating},${metascore},${votes},${gross},'${director}','${actor}',${year} `);
    connection.query(`insert into directors(dname) values('${dname}')`);
    connection.query('select max(id) as id from directors', (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
};

// Updating director details by director id
const updatedirector = (id,body) => {
    const eid=parseInt(id.id);
    const dname= body.name;
    return new Promise ((resolve, reject) => {
      connection.query(`update directors set dname='${dname}'where id=${eid}`, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  };
  
  // Deleting director by director id
  const deletedirector = (id) => {
  // console.log(id)
    return new Promise ((resolve, reject) => {
      connection.query(`delete from directors where id=${id.id}`, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  };
  
  module.exports={ getdirectorsByID, getAllDirectors, addNewdirector, updatedirector, deletedirector };