import { reactGlosser, presetAll } from '../../lib/index.js'

{/* START */}
// PRETEND: import { reactGlosser, presetAll } from '@abw/gloss'

const { gloss } = reactGlosser(
  presetAll(),
  [
    /^outline-(\w+)-(\w+)$/,
    ([_, width, color]) => ({
      style: { outline: `${width} solid ${color}` }
    })
  ],
  {
    button:         'radius-1 pad-2-4 border-none',
    'button-red':   'button bgcol-red-600 color-white',
    'button-blue':  'button bgcolor-blue-600 fgcol-white',
    'button-green': 'button bg-green-600 color-white',
  },
)

export default gloss