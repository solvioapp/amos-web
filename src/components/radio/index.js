import Top_ from './top.sc'
import Radio_ from './radio.sc'
import Check_ from './check.sc'
import Label_ from './label.sc'
import React from 'react'

const Radio = ({children, ...rest}) => {
  return (
    <Top_ {...rest}>
    <div className="containerOuter">
      <div className="container">
        <input type="radio" className="hidden" id="input1" name="inputs"/>
        <label className="entry" htmlFor="input1"><div className="circle"></div><div className="entry-label">Kingdom</div></label>
        <input type="radio" className="hidden" id="input2" name="inputs"/>
        <label className="entry" htmlFor="input2"><div className="circle"></div><div className="entry-label">Horse</div></label>
        <input type="radio" className="hidden" id="input3" name="inputs"/>
        <label className="entry" htmlFor="input3"><div className="circle"></div><div className="entry-label">Computer</div></label>
        <div className="highlight"></div>
        <div className="overlay"></div>
      </div>
    </div>
    <svg width="0" height="0" viewBox="0 0 40 140">
      <defs>
        <mask id="holes">
          <rect x="0" y="0" width="100" height="140" fill="white" />
          <circle r="12" cx="20" cy="20" fill="black"/>
          <circle r="12" cx="20" cy="70" fill="black"/>
          <circle r="12" cx="20" cy="120" fill="black"/>
        </mask>
      </defs>
    </svg>
    </Top_>
  )
}

export default Radio