import * as R from 'ramda'
import {createSelector} from 'reselect'

export const selectReview = R.prop(`review`)

export const selectSlogan = createSelector(
  selectReview,
  R.prop(`slogan`)
)
