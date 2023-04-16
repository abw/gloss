import { reactGlosser, presetAll } from '../../lib/index.js'

{/* START */}
// PRETEND: import { reactGlosser, presetAll } from '@abw/gloss'

const { gloss } = reactGlosser(
  presetAll(),
  {
    'alert':    'radius-1 pad-4-8 border-solid-1-1-1-10 mar-v-6 shadow-2',
    'info':     'alert bg-blue-200 border-col-blue-300 col-blue-800',
    'warning':  'alert bg-orange-200 border-col-orange-400 col-orange-800',
    'button':   'radius-1 pad-2-4 border-none',
    'btn-red':  'button bgcol-red-600 color-white',
    'btn-blue': 'button bgcolor-blue-600 fgcol-white',
    'bt-green': 'button bg-green-600 color-white',
  }
)

export default gloss

