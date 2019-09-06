import Authorized from './authorized'
import Guest from './guest'
import React, {useCallback, useState} from 'react'
import connect from '../connect'
import {navto} from 'common/history'
import {filter, isEmpty, not, pipe} from 'ramda'
import {useReviewCtx} from '../'

const LearnRequire = ({isAuthenticated}) => (
  isAuthenticated ? <Authorized/> : <Guest/>
)

const filterEmptyArrays = filter(pipe(
  isEmpty,
  not,
))

const goTopics = navto(`/review/topics`)
const goThanks = navto(`/review/thanks`)

export const useReqState = () => {
  const {setRequirements, requirements: initItems} = useReviewCtx()

  const [requirements, setReqs] = useState(initItems || [])

  const goPrev = useCallback(() => {
    setRequirements(filterEmptyArrays(requirements))
    goTopics()
  }, [requirements, setRequirements])

  const goFinish = useCallback(() => {
    setRequirements(filterEmptyArrays(requirements), true)
    goThanks()
  }, [requirements, setRequirements])

  return {
    setRequirements: setReqs,
    goPrev,
    goFinish,
    initItems,
  }
}

export default connect(LearnRequire)
