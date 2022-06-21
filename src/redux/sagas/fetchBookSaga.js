import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchBooks(action) {
    try {
        const response = yield axios.post('/book',action.payload);
        console.log('get all:', response.data);
        yield put({ type: 'SET_BOOK', payload: response.data });
    } catch (err) {
        console.error(`Error GETTING books`, err);
    }
  }

function* fetchBookSaga(){
    yield takeEvery('FETCH_BOOK', fetchBooks);
}

  export default fetchBookSaga