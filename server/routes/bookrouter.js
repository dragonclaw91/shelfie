const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');


router.get('/', (req, res) => {

    const query = `SELECT * FROM book ORDER BY "author" ASC`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all movies', err);
        res.sendStatus(500)
      })
  
  });





router.post('/', (req, res) => {
    const search = req.body.search
    let newTitle = ""
    let newAuthor = ""
    let newSummary = ""
    let newImage = ""

    console.log(req.body)
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${search}&key=AIzaSyCI2O7pgebs5ESibrx5ciJa9uxb9DTDbtI`).
        then((response) => {
            console.log('this is', response.data.items)
            console.log(req.body.id)
            id = req.body.id
            for(let i = 0; i < response.data.items.length;i++){
                console.log("this is in the loop",response.data.items[i])
                console.log("this should be the title",response.data.items[i].volumeInfo.title)
                 newTitle = response.data.items[i].volumeInfo.title
                console.log("this should be the summary",response.data.items[i].volumeInfo.description)
                 newSummary = response.data.items[i].volumeInfo.description
                console.log("this should be the image_url",response.data.items[i].volumeInfo.imageLinks.thumbnail)
                 newImage = response.data.items[i].volumeInfo.imageLinks.thumbnail
                for(let j = 0; j<response.data.items[i].volumeInfo.authors.length;j++){
                    console.log("should be author",response.data.items[i].volumeInfo.authors[j])
                  newAuthor = response.data.items[i].volumeInfo.authors[j]
                }
            }
            console.log(newAuthor)
                const queryText = `INSERT INTO "book" ("user_id","title","author","summary","image_url") VALUES ($1,$2,$3,$4,$5);`
            pool.query(queryText, [id,newTitle,newAuthor,newSummary,newImage])
            
            res.send(response.data);
        }).catch(error => {
            console.log('ERROR in GET books', error);
            res.sendStatus(500);
        }); 
})


router.put('/', (req, res) => {
    const updatedRating = req.body;
  
    const queryText = `UPDATE "book"
    SET "rating" = $1` 
;
  
    const queryValues = [
      updatedRating.rating,
    ];
  
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing UPDATE book query', err);
        res.sendStatus(500);
      });
  });




  router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    const queryText = 'DELETE FROM book WHERE id=$1';
    pool.query(queryText, [req.params.id])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing DELETE PLANT query', err);
        res.sendStatus(500);
      });
  });
  
module.exports = router;