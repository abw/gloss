import React from 'react'
import { presetPadding, reactGlosser } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { presetPadding, reactGlosser } from '@abw/gloss'

const { gloss } = reactGlosser(
  presetPadding(),
)

const PaddingExample = () =>
  <div>
    <button>Button 1</button>
    <button {...gloss`p`}>Button 2</button>
    <button {...gloss`pad`}>Button 3</button>
    <button {...gloss`padding`}>Button 4</button>
    <button {...gloss`pad-l`}>Button 5</button>
    <button {...gloss`pad-l-4`}>Button 6</button>
    <button {...gloss`pad-l-12`}>Button 7</button>
  </div>

export default PaddingExample

