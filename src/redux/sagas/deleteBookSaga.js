
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';



//sending the book to be deleted to the router
function* deleteItem(action){
    try{
        console.log("TESTING",action.payload)
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
