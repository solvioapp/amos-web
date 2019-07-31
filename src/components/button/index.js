import Top_ from './top.sc'
import Icon from 'components/icon'
import Text_ from './text.sc'
import React from 'react'

const Button = ({icon, children, ...rest}) => (
  <Top_ iconOnly={icon && !children} {...rest}>
    {icon && <Icon src={icon}/>}
    {children && <Text_>{children}</Text_>}
  </Top_>
)

export default Button
