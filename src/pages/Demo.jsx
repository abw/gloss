import React   from 'react'
import { presetAll, presetMargin, presetPadding, presetRadius, reactGlosser } from '../../lib/index.js'
import presetColor from '../../lib/preset/color.js'
import presetBorder from '../../lib/preset/border.js'

const { rules, gloss } = reactGlosser(
  presetAll(),
  [/wibble/, () => ({ class: 'frusset-pouch' })],
  {
    button:         'radius-1 pad-2-4 border-none',
    'button-red':   'button bgcol-red-600 color-white',
    'button-blue':  'button bgcolor-blue-600 fgcol-white',
    'button-green': 'button bg-green-600 color-white',
  },
)
console.log('rules: ', rules);


const Demo = () =>
  <div>
    <h1>Demo</h1>
    <button {...gloss('button-red')}>Red Button</button>
    <button {...gloss`button-green marl`}>Green Button</button>
    <button {...gloss`button-orange ml2`}>Orange Button</button>
    <button {...gloss`button-blue mar-l-3`}>Green Button</button>
    <button {...gloss`button-green ml`}>Green Button</button>
    <button {...gloss`button-green ml4`}>Green Button</button>
    <button {...gloss`button-green m-l-2`}>Green Button</button>
    <button {...gloss`button-green marl2`}>Green Button</button>
    <button>Grey Button</button>
    <button {...gloss`pad-v-2 pad-h-4 rad-2 bg-rose-800 col-white border-5 bdcol-red-200`}>Grey Button</button>
    <div {...gloss`bd-solid-1-1-1-8 bd-red-200 bg-red-50 pad-2-4`}>
      Hello
    </div>
    <div {...gloss`wibble`}>
      You have pleasantly wibbled my frusset pouch.
    </div>
  </div>

export default Demo

