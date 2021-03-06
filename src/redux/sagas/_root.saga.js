import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import fetchBooksSaga from './fetchBookSaga';
import fetchCollection from './fetchCollectionSaga';
import ratingSaga from './ratingSaga';
import deleteBook from './deleteBookSaga';
import manualEntrySaga from './manualEntry';
import addImageSaga from './addImageSaga';
import orderCollectionTitle from './titleSaga';
import fetchCollectionRating from './getRatingSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    fetchBooksSaga(),
    fetchCollection(),
    ratingSaga(),
    deleteBook(),
    manualEntrySaga(),
    addImageSaga(),
    orderCollectionTitle(),
    fetchCollectionRating()
  ]);
}
