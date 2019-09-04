import React from 'react'
import Input from 'components/input'
import IncrementalInputs from 'components/incrementalInputs'

const initTopics = [``]
const makeEmptyTopic = () => ``
const isTopicEmpty = topic => topic === ``

const renderTopic = ({item, index, changeItem}) =>
  <Input key={index} value={item} onChange={changeItem} />

const TopicList = () => (
  <IncrementalInputs initState={initTopics} makeNewItem={makeEmptyTopic} isItemEmpty={isTopicEmpty}>
    {renderTopic}
  </IncrementalInputs>
)

export default TopicList