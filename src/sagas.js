import {
  // call,
  put,
  takeEvery,
  // takeLatest
} from 'redux-saga/effects'

import * as TEST from './constants/test'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   yield put({ type: TEST.SAGA_DONE });
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(TEST.GET_COMMENTS_SUCCESS, fetchUser);
}

export default mySaga;
