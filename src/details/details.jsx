import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';


function DisplayBooks(){
    const history = useHistory() 
    let bookList = useSelector(store => store.movies);


    let bookId = params.movieId;
let book = bookList.find(book => book.id === Number(bookId));
console.log(book.title)


if (!movie) return <h2>Invalid Movie Id</h2>




return(
    <>
    <h2>Details Page</h2>
    <h3>Book Title: </h3>
    <h2>{movie.title}</h2>
    <h3> Summary: </h3><br />
    <p> {book.summary}</p>
    <button>delete</button>
    </>
)
}


export default DisplayBooks