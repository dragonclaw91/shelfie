
# Project Title

This project is called shelfie and takes the ISBN nuber of a physical book and catalogs it using google book api.



Given time I would like to add genres to the sorting option and implimeting more apis as well as making a mobile version of this.





## Lessons Learned

The biggest challenge I faced when building this was the inconsistency of the result from googles api.
I had to overcome this by using alot of data to see all posibilties of results.


## Tech Stack

**Client:** React, Redux, Reactstrap, react-simple-star-rating 

**Server:** Node, Express


## API Reference

#### Get book form google book api

```http
  GET https://www.googleapis.com/books/v1/volumes?q=isbn:
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `isbn` | `number` | takes isbn number as a paramater|



## Run Locally

Clone the project

```bash
  git clone https://github.com/dragonclaw91/shelfie
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run server
```

  Start the Client

  ```bash
  npm run client
  ```

  




## Screenshots
page to add a book 
![5BD041B2-2FF2-4364-BEDF-38E7FD6E7845](https://user-images.githubusercontent.com/97910101/177460517-cb67f6af-69d8-4af2-9ab8-b9162008d028.jpeg)


collection displayed
![F3C8F6B8-9645-40C7-A757-315138E342F9](https://user-images.githubusercontent.com/97910101/177460597-a5cba543-9730-400e-9d49-ca074ceef58b.jpeg)

details page where rating, deleting, adding an image if one is not present, or viewing the summary of a book
![1328A3F1-5A1F-48C4-A0F5-236038025B39](https://user-images.githubusercontent.com/97910101/177460987-0661c2d8-fbcc-414e-999f-e72fc3fd6913.jpeg)
## Usage/Examples

This app works by adding books using google book api to search by isbn number or manual entry

from there the book is added to the collection and the user id pushed to the collection page

if a book in the collection is clicked on user is navigated to the details page where adding an image, rating, and deleting occur.




## Running Tests

here are a few isbn numbers of popular books to use

to kill a mokingbird - 9780062368683

1984 - 9780547249643

the great gastby - 9781853260414
