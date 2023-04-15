import React from 'react'
import { presetAll, reactGlosser } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { presetAll, reactGlosser } from '@abw/gloss'

const { gloss } = reactGlosser(
  presetAll(),
  {
    button:         'radius-1 pad-2-4 border-none',
    'button-red':   'button bg-red-600 fg-white',
    'button-blue':  'button bg-blue-600 fg-white',
    'button-green': 'button bg-green-600 fg-white',
  }
)

const ButtonsExample = () =>
  <div>
    <button {...gloss`button-red`}>Red Button</button>
    <button {...gloss`button-blue mar-l-2`}>Green Button</button>
    <button {...gloss`button-green mar-l-2`}>Orange Button</button>
  </div>

export default ButtonsExample

