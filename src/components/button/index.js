import Button from './button.sc'
import Icon from '../icon'
import React from 'react'

const SexyButton = ({icon, children, ...rest}) => (
  <Button {...rest}>
    {icon && <Icon src={icon}/>}
    {children && <span>{children}</span>}
  </Button>
)

export default SexyButton
