import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* collectionRating() {
    // get books by ratings from the DB
    try {
        
        const collection = yield axios.get(`/rating`);
        console.log('get all of collection:', collection.data);
        yield put({ type: 'SET_COLLECTION', payload: collection.data });

    } catch {
        console.log('get all error');
    }
        
}


function* fetchCollectionRating(){
    yield takeEvery('FETCH_COLLECTION_RATING',collectionRating );

}

export default fetchCollectionRating