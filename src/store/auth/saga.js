import {AUTHORIZE, LOGOUT} from './actions'
import {put, takeEvery} from 'redux-saga/effects'
import {setErrors, setIsAuth} from './actions'

function* authorize({email, password}) {
  // fake authorization
  const isAuth = (
    email === `demo@example.com` &&
    password === `demo123`
  )

  if (!isAuth) {
    const message = `I don't know that email, password combination. 🙁`
    const error = {allfields: {message}}
    return yield put(setErrors(error))
  }

  yield put(setIsAuth(true))
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
