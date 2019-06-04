import * as R from 'ramda'
import {createSelector} from 'reselect'

export const selectSearch = R.prop(`search`)

export const selectSlogan = createSelector(
  selectSearch,
  R.prop(`slogan`)
)
