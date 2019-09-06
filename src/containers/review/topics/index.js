import Authorized from './authorized'
import Guest from './guest'
import React, {useState, useCallback} from 'react'
import connect from '../connect'

import {navto} from 'common/history'
import {filter, isEmpty, not, pipe} from 'ramda'
import {useReviewCtx} from '../'

const Topics = ({isAuthenticated}) => (
  isAuthenticated ? <Authorized/> : <Guest/>
)

const filterEmptyArrays = filter(pipe(
  isEmpty,
  not,
))

const goRequirements = navto(`/review/requirements`)
const goLinks = navto(`/review/links`)
const goThanks = navto(`/review/thanks`)

export const useReqState = () => {
  const {setTopics, topics: initItems} = useReviewCtx()

  const [topics, setTops] = useState(initItems || [])

  const goPrev = useCallback(() => {
    setTopics(filterEmptyArrays(topics))
    goLinks()
  }, [topics, setTopics])

  const goNext = useCallback(() => {
    setTopics(filterEmptyArrays(topics))
    goRequirements()
  }, [topics, setTopics])

  const goFinish = useCallback(() => {
    setTopics(filterEmptyArrays(topics), true)
    goThanks()
  }, [topics, setTopics])

  return {
    setTopics: setTops,
    goPrev,
    goNext,
    goFinish,
    initItems,
  }
}

export default connect(Topics)
