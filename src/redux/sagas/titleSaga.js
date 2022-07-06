import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* collectionTitle() {
    // get all books by title from the DB
    try {
        
        const collection = yield axios.get(`/title`);
        console.log('get all of collection:', collection.data);
        yield put({ type: 'SET_COLLECTION', payload: collection.data });

    } catch {
        console.log('get all error');
    }
        
}


function* orderCollectionTitle(){
    yield takeEvery('FETCH_COLLECTION_TITLE',collectionTitle );

}

export default orderCollectionTitle