import React, {useCallback, useEffect, useRef} from 'react'
import Input from 'components/input'
import IncrementalInputs from 'components/incrementalInputs'
import RadioGroup, {RadioGroupHead} from 'components/radioGroup'
import {fromPairs, isEmpty, map, prop} from 'ramda'
import {object, string} from 'yup'
import styled from 'styled-components'

const radioNecessity = {
  title: `I:`,
  name: `necessity-level`,
  elements: [
    {
      value: `helpful`,
      text: <span>think it would be <em>helpful</em></span>,
    },
    {
      value: `recommended`,
      text: <span>would <em>recommend</em></span>,
    },
    {
      value: `necessary`,
      text: <span>think it's <em>necessary</em></span>,
    },
  ]
}
const radioKnowledge = {
  title: `for people to be at least:`,
  name: `knowledge-level`,
  elements: [
    {
      value: `beginner`,
      text: `beginner`,
    },
    {
      value: `intermediate`,
      text: `intermediate`,
    },
    {
      value: `advanced`,
      text: `advanced`,
    },
    {
      value: `expert`,
      text: `domain expert`,
    },
  ]
}

const reqSchema = object().shape({
  'necessity-level': string().oneOf(map(prop(`value`), radioNecessity.elements)).required(),
  'knowledge-level': string().oneOf(map(prop(`value`), radioKnowledge.elements)).required(),
  topic: string().required()
})

const props = {
  initItems: [{}],
  makeNewItem: () => ({}),
  isItemEmpty: isEmpty,
  // eslint-disable-next-line no-sync
  isItemComplete: data => reqSchema.isValidSync(data),
}

export const RequirementsForm = styled.form`
    padding: 0.5em 1em;
    margin-top: 1em;

    &:nth-of-type(1n+2) {
        border-top: 1px solid gray;
    }
`

const RequirementInput = ({changeItem}) => {

  const onChange = useCallback(e => {
    const formData = new FormData(e.currentTarget)
    const data = fromPairs(Array.from(formData.entries()))
    changeItem(data)
  }, [changeItem])

  const formRef = useRef()

  useEffect(() => {
    formRef.current && formRef.current.scrollIntoView({block: `center`, behavior: `smooth`})
  }, [])

  return (
    <RequirementsForm onChange={onChange} ref={formRef}>
      <RadioGroup {...radioNecessity}/>
      <RadioGroup {...radioKnowledge}/>
      <div>
        <RadioGroupHead>in:</RadioGroupHead>
        <Input name="topic" />
      </div>
    </RequirementsForm>
  )
}

const RequirementsList = () => (
  <IncrementalInputs {...props} component={RequirementInput} />
)

export default RequirementsList