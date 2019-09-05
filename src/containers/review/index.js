import * as R from 'ramda'
import Guest from './guest'
import LearnRequire from './learn-require'
import Links from './links'
import React, {useState, useMemo, useContext} from 'react'
import Thanks from './thanks'
import Topics from './topics'
import connect from './connect'
import {Switch, Redirect, Route} from 'react-router-dom'

const initReview = {
  links: [],
  topics: [],
  requirements: [],
  done: false,
}
const ReviewContext = React.createContext(initReview)

export const useReviewCtx = (mapping = R.identity) => mapping(useContext(ReviewContext))

const redirect = R.both(
  R.propEq(`isAuthenticated`, true),
  R.pathEq([`location`, `pathname`], `/review`)
)

const makeSetterF = ({prop, setReview}) => (val, done = false) => {
  setReview(state => {
    const newState = {...state, [prop]: val, done}
    // TODO: remove logs
    if (done) console.log(`Finished review`, newState)
    return newState
  })
}

function Review(props) {

  const [review, setReview] = useState(initReview)

  const contextValue = useMemo(() => ({
    setLinks: makeSetterF({prop: `links`, setReview}),
    setTopics: makeSetterF({prop: `topics`, setReview}),
    setRequirements: makeSetterF({prop: `requirements`, setReview}),
    // TODO: change alert for fetch-like logic
    submitReview: () => alert(`Submitting review: ${JSON.stringify(review, null, 2)}`),
    ...review,
  }), [review])

  if (redirect(props)) {
    return <Redirect to="/review/links" />
  }

  return (
    <ReviewContext.Provider value={contextValue}>
      <Switch>
        <Route path="/review" component={Guest} exact />
        <Route path="/review/links" component={Links} />
        <Route path="/review/topics" component={Topics} />
        <Route path="/review/requirements" component={LearnRequire} />
        <Route path="/review/thanks" component={Thanks} />
      </Switch>
    </ReviewContext.Provider>
  )
}

export default connect(Review)
