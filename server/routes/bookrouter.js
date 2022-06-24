const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');


router.get('/', (req, res) => {

    const query = `SELECT * FROM book
    JOIN "user" ON "book".user_id="user".id
    WHERE "user".id=$1
    ORDER BY "author" ASC`;
    pool.query(query,[req.user.id])
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all books', err);
        res.sendStatus(500)
      })
  
  });





router.post('/', (req, res) => {
    const search = req.body.search
    let newTitle = ""
    let newAuthor = ""
    let newSummary = ""
    let newImage = ""

    console.log( req.body)
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${search}&key=AIzaSyCI2O7pgebs5ESibrx5ciJa9uxb9DTDbtI`).
        then((response) => {
            if(response.data.totalItems === 0){
                
            }
            console.log('this is what i want to know', response.data.items[response.data.totalItems - 1].volumeInfo.publishedDate)
            let book = response.data.items
            console.log(req.body.id)
            console.log("this is the new book",book)
            id = req.body.id

      

            for(let i = 0; i < book.length - 1; i++){
            console.log( "THESE ARE THE IMAGES", book[i].volumeInfo.imageLinks.thumbnail)
            if(book[i].volumeInfo.imageLinks.thumbnail !== undefined){
                newImage= book[i].volumeInfo.imageLinks.thumbnail
            }else{
                newImage = null
            }
            }
            
            if(response.data.items[0].volumeInfo.publishedDate > response.data.items[response.data.totalItems - 1].volumeInfo.publishedDate){
                book = response.data.items[0].volumeInfo
            }else{
                book = response.data.items[response.data.totalItems - 1].volumeInfo
            }
              

                console.log("this should be the title",book.title)
                 newTitle = book.title
                console.log("this should be the summary",book.description)
                 newSummary = book.description
                //  if(!book.imageLinks){
                //     newImage=null
                //  }else{
                // console.log("this should be the image_url",book.imageLinks.thumbnail)
                //  newImage = book.imageLinks.thumbnail}
                for(let j = 0; j<book.authors.length;j++){
                    console.log("should be author",book.authors[j])
                  newAuthor = book.authors[j]}
                
            
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
    console.log(req.body.id)
    const updatedRating = req.body;
  
    const queryText = `UPDATE "book"
    SET "rating" = $1 WHERE id=$2` 
;
  
    const queryValues = [
      updatedRating.rating,
      updatedRating.id
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
    const queryText = 'DELETE FROM book WHERE "ID"=$1';
    pool.query(queryText, [req.params.id])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing DELETE BOOK query', err);
        res.sendStatus(500);
      });
  });
  
module.exports = router;