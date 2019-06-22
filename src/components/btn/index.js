import React from 'react';
import constants from './constants'
import {Link} from 'react-router-dom'

const Button = props => {
  const btnConfig = constants[props.type]
  const link = btnConfig.link
  const MyButton = () => <button onClick={props.onClick}>{btnConfig.text}</button>
  if (link) {
    return (
    <Link to={link}><MyButton /></Link>
  )} else return ( <MyButton />)
}

export default Button