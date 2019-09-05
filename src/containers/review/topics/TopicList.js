import React, {useCallback} from 'react'
import Input from 'components/input'
import IncrementalInputs from 'components/incrementalInputs'

const props = {
  initItems: [``],
  makeNewItem: () => ``,
  isItemEmpty: link => link === ``,
  isItemComplete: Boolean,
}

const TopicInput = ({item, index, changeItem}) => {

  const onChange = useCallback(e => changeItem(e.target.value), [changeItem])

  return <Input key={index} value={item} onChange={onChange} />
}

const TopicList = () => (
  <IncrementalInputs {...props} component={TopicInput}/>
)

export default TopicList