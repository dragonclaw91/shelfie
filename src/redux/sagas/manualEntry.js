import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//adding a book manually 
function* manualEntry(action) {
    try {
        const response = yield axios.post('/manual',action.payload);

        
        console.log('get all:', response.data);

        yield put({type: 'FETCH_COLLECTION'})
    
    } catch (err) {
        console.error(`Error GETTING books`, err);
    }
  }



function* manualEntrySaga(){
    yield takeEvery('MANUAL_ENTRY', manualEntry);

}

  export default manualEntrySaga