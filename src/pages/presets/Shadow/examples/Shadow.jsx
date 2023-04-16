import React from 'react'
import { presetShadow, reactGlosser } from '../../../../../lib/index.js'

{/* START */}
// PRETEND: import { presetShadow, reactGlosser } from '@abw/gloss'

const { gloss } = reactGlosser([
  presetShadow(),
  {
    box: {
      style: {
        padding: '1rem',
        margin:  '0 0 2rem 0'
      }
    }
  }
])


const ShadowExample = () =>
  <div>
    <div {...gloss`box shadow`}>shadow</div>
    <div {...gloss`box shadow-2`}>shadow-2</div>
    <div {...gloss`box shadow-3`}>shadow-3</div>
    <div {...gloss`box shadow-4`}>shadow-4</div>
    <div {...gloss`box shadow-4-20`}>shadow-4-20</div>
  </div>

export default ShadowExample

