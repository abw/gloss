import React from 'react'
import { presetSize, reactGlosser } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { presetSize, reactGlosser } from '@abw/gloss'

const { gloss } = reactGlosser(
  presetSize(),
)

const SizeExample = () =>
  <div>
    <div {...gloss`size-0.8`}>size-0.8</div>
    <div {...gloss`size-1`}>size-1</div>
    <div {...gloss`size-1.5`}>size-1.5</div>
    <div {...gloss`size-2`}>size-2</div>
    <div {...gloss`size-2 height-3`}>size-2 height-3</div>
  </div>

export default SizeExample

