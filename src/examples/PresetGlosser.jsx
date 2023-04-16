import { glosser } from '../../lib/index.js'

{/* START */}
// PRETEND: import { gloss, presetAll } from '@abw/gloss'

const { gloss } = glosser(
  presetAll(),
)

export default gloss