import Authorized from './authorized'
import Guest from './guest'
import React, {useState, useCallback} from 'react'
import connect from '../connect'
import {navto} from 'common/history'
import {useReviewCtx} from '../'
import {filter} from 'ramda'

const Links = ({isAuthenticated}) => (
  isAuthenticated ? <Authorized/> : <Guest/>
)

export const filterEmptyLinks = filter(Boolean)

const goTopics = navto(`/review/topics`)

export const useReqState = () => {
  const {setLinks, links: initItems} = useReviewCtx()

  const [links, setLks] = useState(initItems || [])

  const goNext = useCallback(() => {
    setLinks(filterEmptyLinks(links))
    goTopics()
  }, [links, setLinks])

  return {
    setLinks: setLks,
    goNext,
    initItems,
  }
}

export default connect(Links)
