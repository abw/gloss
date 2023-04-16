import gloss from './RulesObject.jsx'

{/* START */}
import React from 'react'
// PRETEND: import gloss from './Gloss.js'

const UseRules = () =>
  <>
    <div {...gloss`example`}>
      Hello World
    </div>
    <div {...gloss`example2`}>
      Hello World
    </div>
  </>

export default UseRules

