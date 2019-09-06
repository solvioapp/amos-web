import React, {useState, useEffect, useCallback, useRef} from 'react'

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
  onUpdate,
}) => {
  const [items, setItems] = useState(initItems)

  const renderFunc = render || children
  if (!renderFunc && !Component) return null

  useEffect(() => {
    onUpdate && items !== initItems && onUpdate(items)
  }, [items, onUpdate])

  const appendIfNecessary = useCallback(
    ifElse(
      any(item => isItemEmpty(item) || !isItemComplete(item)), identity, append(makeNewItem())
    ),
    [isItemEmpty, makeNewItem]
  )

  const mounted = useRef()
  useEffect(() => {
    mounted.current = true
  }, [])

  const finalItems = mounted.current ? items : appendIfNecessary(items)

  return (
    <>
      {finalItems.map((item, index) => {
        const props = {
          item,
          index,
          changeItem: changeItems({
            index,
            setItems,
            makeNewItem,
            appendIfNecessary,
            isItemEmpty,
            isItemComplete
          })
        }

        if (renderFunc) return renderFunc(props)

        const key = (typeof item === `object` && item.key) || index

        return <Component {...props} key={key} />
      })}
    </>
  )
}

export default IncrementalInputs