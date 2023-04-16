import React from 'react'
import { presetColor, presetPadding, presetMargin, presetBorder,reactGlosser } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import {
// PRETEND:   presetColor, presetPadding, presetMargin, presetBorder, reactGlosser
// PRETEND: } from '@abw/gloss'

const { gloss } = reactGlosser(
  presetColor(),
  presetPadding(),
  presetMargin(),
  presetBorder()
)

const ColorExample = () =>
  <div>
    <div {...gloss`bg-red-700 fg-red-200 pad-2-4 mar-b-2`}>
      Pale red text on red background
    </div>
    <div {...gloss`bg-green-700 fg-green-200 pad-2-4 mar-b-2`}>
      Pale green text on a green background
    </div>
    <div {...gloss`bg-blue-700 fg-blue-200 pad-2-4 mar-b-2`}>
      Pale blue text on a blue background
    </div>
    <div {...gloss`bd-teal-700 bd-dashed-2 pad-2-4 mar-b-2`}>
      Dashed 2px teal border
    </div>
  </div>

export default ColorExample

