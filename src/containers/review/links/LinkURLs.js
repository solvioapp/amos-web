import React, {useCallback} from 'react'
import Input from 'components/input'
import IncrementalInputs from 'components/incrementalInputs'

import {string} from 'yup'
const urlSchema = string().url().required()

const props = {
  initItems: [``],
  makeNewItem: () => ``,
  isItemEmpty: link => link === ``,
  // eslint-disable-next-line no-sync
  isItemComplete: link => urlSchema.isValidSync(link),
}

const LinkInput = ({item, index, changeItem}) => {

  const onChange = useCallback(e => changeItem(e.target.value), [changeItem])

  return <Input key={index} value={item} onChange={onChange} />
}

const LinksURLs = () => (
  <IncrementalInputs {...props} component={LinkInput}/>
)

export default LinksURLs