import { reactGlosser } from '../../lib/index.js'

{/* START */}
// PRETEND: import { reactGlosser } from '@abw/gloss'

const { gloss } = reactGlosser(
  [
    /^color-(.+)$/,
    ([, col]) => ({
      style: { color: col }
    })
  ]
)

export default gloss

