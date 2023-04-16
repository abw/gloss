import gloss from './RulesRegex.jsx'

{/* START */}
import React from 'react'
// PRETEND: import gloss from './Gloss.js'

const UseRules = () =>
  <>
    <div {...gloss`color-green`}>
      Hello World in green
    </div>
    <div {...gloss`color-rebeccapurple`}>
      Hello World in purple
    </div>
    <div {...gloss`color-#ff7f00`}>
      Hello World in orange
    </div>
  </>

export default UseRules

