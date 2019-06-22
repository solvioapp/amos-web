import React from 'react';

import amosPortrait from 'root/public/static/amosPortrait.png';

const AmosPortrait = (props) => (
  <img 
    src={amosPortrait} 
    alt="amosPortrait" 
    height={props.big ? '130px' : '50px'}
  />
)

export default AmosPortrait