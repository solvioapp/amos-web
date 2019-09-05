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

const chooseInitItems = (defaults, fromParent) =>
  fromParent.initItems.length ? fromParent.initItems : defaults.initItems

const LinksURLs = ({onUpdate, initItems}) => (
  <IncrementalInputs
    {...props}
    component={LinkInput}
    onUpdate={onUpdate}
    initItems={chooseInitItems(props, {initItems})}
  />
)

export default LinksURLs