const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');




router.post('/', (req, res) => {
    let book = req.body
    id = book.id
    console.log(req.body);
    const queryText = `INSERT INTO "book" ("user_id","title","author","summary","image_url") VALUES ($1,$2,$3,$4,$5);`
    pool.query(queryText, [id,book.title,book.author,book.summary,book.bookCover])
        res.sendStatus(201);
})


router.put('/', (req, res) => {
    console.log("this is the new image",req.body)
    console.log(req.body.id)
    const updatedImage = req.body;
  
    const queryText = `UPDATE "book"
    SET "image_url" = $1 WHERE "ID"=$2` 
;
  
    const queryValues = [
      updatedImage.image,
      updatedImage.id
    ];
  
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing UPDATE book query', err);
        res.sendStatus(500);
      });
  });




module.exports = router;