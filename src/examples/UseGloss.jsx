import React from 'react'
import gloss from '../examples/ReactPreset.jsx'

{/* START */}
// PRETEND: import gloss from './Gloss.js'

const UseGloss = () =>
  <div>
    <div {...gloss`info`}>
      <div {...gloss`mar-b-4`}>
        This is an info pane.
      </div>
      <button {...gloss`btn-blue`}>Blue Button</button>
    </div>
    <div {...gloss`warning`}>
      <div {...gloss`mar-b-4`}>
        This is a warning pane.
      </div>
      <button {...gloss`btn-red`}>Red Button</button>
    </div>
  </div>

export default UseGloss