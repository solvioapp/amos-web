import React from 'react'
import Input from 'components/input'
import IncrementalInputs from 'components/incrementalInputs'

const initLinks = [``]
const makeEmptyLink = () => ``
const isLinkEmpty = link => link === ``

const renderLink = ({item, index, changeItem}) =>
  <Input key={index} value={item} onChange={changeItem} />

const LinksURLs = () => (
  <IncrementalInputs initState={initLinks} makeNewItem={makeEmptyLink} isItemEmpty={isLinkEmpty}>
    {renderLink}
  </IncrementalInputs>
)

export default LinksURLs