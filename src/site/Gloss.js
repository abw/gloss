import { reactGlosser, presetAll } from '../../lib/index.js'

const { gloss } = reactGlosser(
  presetAll(),
  {
    'alert':        'rad-1 pad-4-8 bor-solid-1-1-1-10 mar-b-4 shadow-2-10',
    'info':         'alert bg-blue-200 bor-col-blue-300 col-blue-800',
    'warning':      'alert bg-orange-200 bor-col-orange-400 col-orange-800',
    'warning-head': 'col-orange-800 mar-t-2',
    'button':       'radius-1 pad-2-4 border-none',
    'button-red':   'button bgcol-red-600 color-white',
    'button-blue':  'button bgcolor-blue-600 fgcol-white',
    'button-green': 'button bg-green-600 color-white',
  }
)

export default gloss