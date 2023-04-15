import React from 'react'
import { presetMargin, reactGlosser } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { presetMargin, reactGlosser } from '@abw/gloss'

const { gloss } = reactGlosser(
  presetMargin(),
)

const MarginExample = () =>
  <div>
    <button>Button 1</button>
    <button {...gloss`m`}>Button 2</button>
    <button {...gloss`mar`}>Button 3</button>
    <button {...gloss`margin`}>Button 4</button>
    <button {...gloss`mar-l`}>Button 5</button>
    <button {...gloss`mar-l-4`}>Button 6</button>
    <button {...gloss`mar-l-12`}>Button 7</button>
  </div>

export default MarginExample

