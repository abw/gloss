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
testStyle('fg-col-white', { 'color': '#fff' })
testStyle('fg-color-white', { 'color': '#fff' })
testStyle('text-white', { 'color': '#fff' })
testStyle('col-white', { 'color': '#fff' })
testStyle('color-white', { 'color': '#fff' })

testStyle('bg-white', { 'background-color': '#fff' })
testStyle('bgcol-white', { 'background-color': '#fff' })
testStyle('bgcolor-white', { 'background-color': '#fff' })
testStyle('bgcolour-white', { 'background-color': '#fff' })
testStyle('bg-col-white', { 'background-color': '#fff' })
testStyle('bg-color-white', { 'background-color': '#fff' })
testStyle('bg-colour-white', { 'background-color': '#fff' })

testStyle('b-white', { 'border-color': '#fff' })
testStyle('bor-white', { 'border-color': '#fff' })
testStyle('borcol-white', { 'border-color': '#fff' })
testStyle('border-white', { 'border-color': '#fff' })
testStyle('bordercol-white', { 'border-color': '#fff' })
testStyle('border-col-white', { 'border-color': '#fff' })
testStyle('border-color-white', { 'border-color': '#fff' })
testStyle('border-colour-white', { 'border-color': '#fff' })
