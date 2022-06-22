import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function DisplayBooks(){
    const dispatch = useDispatch()
    let bookList = useSelector(store => store.collectionReducer);


    let params = useParams();
console.log(params);

    let bookId = params.bookId;
let book = bookList.find(book => book.id === Number(bookId));
console.log(book)

function rateBook(rating){
    dispatch({ type: 'RATINGS', payload: {rating: rating} })
 console.log(rating)
}


if (!book) return <h2>Invalid Book Id</h2>




return(
    <>
    <h2>Details Page</h2>
    <h3>Book Title: </h3>
    <h2>{book.title}</h2>
    <img src={book.image_url} />
    <h3> Summary: </h3><br />
    <p> {book.summary}</p>
    <button>delete</button>
    <input type = "radio"  onClick={() => rateBook(1)} ></input>
    <input type = "radio"  onClick={() => rateBook(2)}  ></input>
    <input type = "radio"  onClick={() => rateBook(3)}  ></input>
    <input type = "radio"   onClick={() => rateBook(4)}  ></input>
    <input type = "radio"   onClick={() => rateBook(5)}  ></input>
    </>
)
}


export default DisplayBooks