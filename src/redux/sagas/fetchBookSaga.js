import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import swal from 'sweetalert';


function* fetchBooks(action) {
    try {
        const response = yield axios.post('/book',action.payload);

        
        console.log('get all:', response.data);


        yield put({ type: 'FETCH_COLLECTION'});
       
    } catch (err) {
        console.error(`Error GETTING books`, err);
        swal("Please Add Manually","error")
    }
  }



function* fetchBookSaga(){
    yield takeEvery('FETCH_BOOK', fetchBooks);

}

  export default fetchBookSaga