import gloss from './ButtonGlosser.jsx'

{/* START */}
import React from 'react'
// PRETEND: import gloss from './Gloss.js'

const UseButtons = () =>
  <>
    <button {...gloss`button-red mar-r-4`}>
      Red Button
    </button>
    <button {...gloss`button-green mar-r-4`}>
      Green Button
    </button>
    <button {...gloss`button-blue mar-r-4`}>
      Blue Button
    </button>
    <button {...gloss`button bg-color-orange-200 outline-2px-orange`}>
      Orange Button
    </button>
  </>

export default UseButtons

