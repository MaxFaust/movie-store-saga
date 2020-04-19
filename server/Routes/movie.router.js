const axios = require('axios');

const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//search request
router.post('/api/', (req, res) => {
    console.log('Hamburger?', req.body)
    axios.get(`/`)
          .then(response => {
              res.send(response.data.data);
          })
          .catch(error => {
              console.log('Error on GET:', error)
              res.sendStatus(500);
          })
  })

  
// GET route to pull all movie data from database and send to client
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "movies";`;

    pool.query(queryText)
        .then((result) => {
            // sends database information back to client in array
            res.send(result.rows)
        })
        .catch((err) => {
            console.log('ERROR completing movie query ', err);
            res.sendStatus(500);
        });
}); // End of GET 

module.exports = router;