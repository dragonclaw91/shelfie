const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const axios = require('axios');





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

router.post('/', (req, res) => {
    const search = req.body.search
    console.log(req.body)
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${search}&key=AIzaSyCI2O7pgebs5ESibrx5ciJa9uxb9DTDbtI`).
        then((response) => {
            console.log('this is', response.data.items)
            for(let i = 0; i < response.data.items.length;i++){
                console.log("this is in the loop",response.data.items[i])
                console.log("this should be the title",response.data.items[i].volumeInfo.title)
                console.log("this should be the summary",response.data.items[i].volumeInfo.description)
                console.log("this should be the image_url",response.data.items[i].volumeInfo.imageLinks.thumbnail)
                for(let j = 0; j<response.data.items[i].volumeInfo.authors.length;j++){
                    console.log("should be author",response.data.items[i].volumeInfo.authors[j])
                }
            }
            res.send(response.data);
        }).catch(error => {
            console.log('ERROR in GET books', error);
            res.sendStatus(500);
        }); 
})

module.exports = router;