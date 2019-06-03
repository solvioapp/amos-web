import {useEffect} from 'react'

export const useMount = mount => useEffect(
  mount, []
)

export const useUnmount = unmount => useEffect(
  () => () => {
    unmount && unmount()
  }, []
)
