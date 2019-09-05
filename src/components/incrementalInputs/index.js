import React, {useState} from 'react'

import {update, pipe, append, ifElse, any, identity} from 'ramda'

const changeItems = ({index, setItems, makeNewItem, isItemEmpty, isItemComplete}) =>
  newItem => setItems(
    pipe(
      update(index, newItem),
      ifElse(
        () => isItemEmpty(newItem) || isItemComplete(newItem),
        pipe(
          updatedItems => updatedItems.filter((item, i) => i === index || !isItemEmpty(item)),
          ifElse(any(isItemEmpty), identity, append(makeNewItem()))
        ),
        identity
      )
      ,
    )
  )

const IncrementalInputs = ({
  initItems = [],
  makeNewItem = identity,
  isItemEmpty = () => false,
  isItemComplete = Boolean,
  render,
  children,
  component: Component,
}) => {
  const [items, setItems] = useState(initItems)

  const renderFunc = render || children
  if (!renderFunc && !Component) return null

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
            isItemEmpty,
            isItemComplete
          })
        }

        if (renderFunc) return renderFunc(props)

        const key = (typeof item === `object` && item.key) || index

        return <Component {...props} key={key}/>
      })}
    </>
  )
}

export default IncrementalInputs