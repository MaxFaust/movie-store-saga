const axios = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
  
// GET- pulls all movie data from database and send to client
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "movies";`;

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((err) => {
            console.log('ERROR completing movie query ', err);
            res.sendStatus(500);
        });
});

//Joins movie table with genre table
router.get('/details', (req, res) => {
    console.log('HIT')
    let queryText =
        `SELECT * FROM "movies"
    JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movies_id"
    JOIN "genres" ON "movies_genres"."genres_id" = "genres"."id"
    ORDER BY "movies"."title" ASC;`;
    pool.query(queryText)
        .then(results => {
            res.send(results.rows);
        })
        .catch(error => {
            console.log(`couldn't get movie`, error);
            res.sendStatus(500);
        })
})

//Updates edited movie information
router.put('/', (req, res) => {
    const newDetail = req.body;
    const queryText = `UPDATE "movies" SET "title"=$1, "description"=$2;`;

    pool.query(queryText, [newDetail.name, newDetail.description])
        .then(() => { res.sendStatus(201); })
        .catch((er) => {
            console.log('error posting new detail', err);
            res.sendStatus(500);
        });
});

module.exports = router;