import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchCollection() {
    // get all books from the DB
    try {
        const collection = yield axios.get('/book');
        console.log('get all of collection:', collection.data);
        yield put({ type: 'SET_COLLECTION', payload: collection.data });

    } catch {
        console.log('get all error');
    }
        
}


export default fetchCollection