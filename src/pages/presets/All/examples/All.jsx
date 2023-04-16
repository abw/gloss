import React from 'react'
import { presetAll,reactGlosser } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { presetAll, reactGlosser } from '@abw/gloss'

const { gloss } = reactGlosser(
  presetAll(),
)

const AllExample = () =>
  <div>
    <div
      {...gloss`bg-red-200 fg-red-800 bd-red-500
      border-1-8 pad-4 mar-v-2 shadow-4-20 size-2
      radius-4`}
    >
      Hello World!
    </div>
  </div>

export default AllExample

