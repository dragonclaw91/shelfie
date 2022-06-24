import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addImage(action) {
    try {
    console.log("in the saga", action.payload)
        const response = yield axios.put('/manual',action.payload);

        
        console.log('get all:', response.data);

        yield put({type: 'FETCH_COLLECTION'})
    
    } catch (err) {
        console.error(`Error GETTING books`, err);
    }
  }



function* addImageSaga(){
    yield takeEvery('ADD_IMAGE', addImage);

}

  export default addImageSaga