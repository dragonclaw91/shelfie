
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';



function* deleteItem(action){
    try{
     yield axios.delete(`/book/${action.payload}`)
     yield put({ type: 'FETCH_COLLECTION' });
  }catch (error) {
    console.error(`Error DELETING book`, error);
  }
  }



  function* deleteBook(){
    yield takeEvery('DELETE_BOOK',deleteItem)
  }

export default deleteBook
