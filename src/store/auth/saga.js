import {AUTHORIZE, LOGOUT} from './actions'
import {put, takeEvery} from 'redux-saga/effects'
import {setIsAuth} from './actions'

function* authorize(action) {
  // fake authorization
  const isAuth = (
    action.email === `admin` &&
    action.password === `123`
  )

  yield put(setIsAuth(isAuth))
}

function* logout() {
  // fake logout
  yield put(setIsAuth(false))
}

function* authSaga() {
  yield takeEvery(AUTHORIZE, authorize)
  yield takeEvery(LOGOUT, logout)
}

export default authSaga
