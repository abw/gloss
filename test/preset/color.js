import { it, expect } from 'vitest'
import glosser from '../../lib/glosser.js'
import presetColor from '../../lib/preset/color.js'

const { gloss } = glosser(
  presetColor()
)

function testStyle(input, style) {
  it(
    input,
    () => expect(gloss(input)).toStrictEqual({ style })
  )
}

// /^(?:fg|fgcol|fgcolor|text|col|color)(?:-)?(\w+)(?:-(\d+))?$/,
testStyle('fg-white', { 'color': '#fff' })
testStyle('fgcol-white', { 'color': '#fff' })
testStyle('fgcolor-white', { 'color': '#fff' })
testStyle('text-white', { 'color': '#fff' })
testStyle('col-white', { 'color': '#fff' })
testStyle('color-white', { 'color': '#fff' })
