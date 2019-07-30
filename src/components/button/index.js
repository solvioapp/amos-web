import Icon from 'components/icon'
import Button_ from './button.sc'
import React from 'react'

const Button = ({icon, children, ...rest}) => (
  <Button_ iconOnly={icon && !children} {...rest}>
    {icon && <Icon src={icon}/>}
    {children && <span>{children}</span>}
  </Button_>
)

export default Button
