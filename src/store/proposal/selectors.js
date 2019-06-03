import * as R from 'ramda'
import {createSelector} from 'reselect'

export const selectProposal = R.prop(`proposal`)

export const selectSlogan = createSelector(
  selectProposal,
  R.prop(`slogan`)
)
