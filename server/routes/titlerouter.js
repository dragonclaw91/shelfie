const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');

router.get('/', (req, res) => {
//allowing users to order by title
    const query = `SELECT * FROM book
    JOIN "user" ON "book".user_id="user".id
    WHERE "user".id=$1
    ORDER BY "title" ASC`;
    pool.query(query,[req.user.id])
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all books', err);
        res.sendStatus(500)
      })
  
  });



module.exports = router;