import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';




function AddBook(){
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [bookCover, setBookCover] = useState('')
    const [summary, setSummary] = useState('')
    const [author, setAuthor] = useState('');

    const history = useHistory()




    return(
        <>
        <h1>welcome user</h1>
        <h1>find book</h1>
        <input>ISBN: </input>
        <button>submit</button>

        <h4>add manually</h4>

        <input>title</input>
        <input>author</input>
        <input>image url</input>
        <input>summary</input>
        </>
    )
}


export default AddBook