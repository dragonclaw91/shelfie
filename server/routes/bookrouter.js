const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')





// Return back an array of all the fruit
router.get('/', (req, res) => {
  
    const query = `SELECT * FROM book ORDER BY "author" ASC`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all books', err);
        res.sendStatus(500)
      })
});



module.exports = router;