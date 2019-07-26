import React from 'react'
import Panel from './panel.sc'
import Checkbox from './checkbox.sc'

const AppCheckbox = ({children}) => (
  <Panel>
    <Checkbox checkboxSize={20} checkboxBorderSize={2}>
      <input type="checkbox" defaultChecked/>
    </Checkbox>
    {children}
  </Panel>
)

export default AppCheckbox