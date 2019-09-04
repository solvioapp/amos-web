import React, {useState} from 'react'

import {update, pipe, append, ifElse, any, identity} from 'ramda'

const changeItems = ({index, setItems, makeNewItem, isItemEmpty}) =>
  ({target}) => setItems(
    pipe(
      update(index, target.value),
      updatedItems => updatedItems.filter((item, i) => i === index || !isItemEmpty(item)),
      ifElse(any(isItemEmpty), identity, append(makeNewItem())),
    )
  )

const IncrementalInputs = ({
  initState = [],
  makeNewItem = identity,
  isItemEmpty = () => false,
  render,
  children
}) => {
  const [items, setItems] = useState(initState)

  const renderFunc = render || children
  if (!renderFunc) return null

  return (
        <>
            {items.map((item, index) => {
              const props = {
                item,
                index,
                changeItem: changeItems({
                  index,
                  setItems,
                  makeNewItem,
                  isItemEmpty
                })
              }
              return renderFunc(props)
            })}
        </>
  )
}

export default IncrementalInputs