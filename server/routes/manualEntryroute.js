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



module.exports = router;