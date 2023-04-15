import { it, expect } from 'vitest'
import glosser from '../../lib/glosser.js'
import presetBorder from '../../lib/preset/border.js'

const { gloss } = glosser(
  presetBorder()
)

function testStyle(input, style) {
  it(
    input,
    () => expect(gloss(input)).toStrictEqual({ style })
  )
}

testStyle('b', { 'border-style': 'solid', 'border-width': '1px' })
testStyle('bd', { 'border-style': 'solid', 'border-width': '1px' })
testStyle('bor', { 'border-style': 'solid', 'border-width': '1px' })
testStyle('border', { 'border-style': 'solid', 'border-width': '1px' })
testStyle('b-2', { 'border-style': 'solid', 'border-width': '2px' })
testStyle('bd-2', { 'border-style': 'solid', 'border-width': '2px' })
testStyle('b-2-4', { 'border-style': 'solid', 'border-width': '2px 4px' })
testStyle('b-2-4-6-8', { 'border-style': 'solid', 'border-width': '2px 4px 6px 8px' })
