import * as R from 'ramda'
import {createSelector} from 'reselect'

export const selectAuth = R.prop(`auth`)

export const selectIsAuthenticated = createSelector(
  selectAuth,
  R.prop(`isAuthenticated`)
)

export const selectErrors = createSelector(
  selectAuth,
  R.prop(`errors`)
)
