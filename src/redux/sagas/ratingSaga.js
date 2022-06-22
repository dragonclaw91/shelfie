import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* addRating(action) {
    // add a rating to a book
    try {
        console.log(action.payload)
        const rating = yield axios.put('/book',action.payload);
        console.log('get all of collection:', action.payload);
        yield put({ type: 'SET_RATING', payload: action.payload });

    } catch {
        console.log('ratings error');
    }
        
}


function* ratingSaga(){
    yield takeEvery('RATINGS', addRating);

}


export default ratingSaga