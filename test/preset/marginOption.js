import { it, expect } from 'vitest'
import glosser from '../../lib/glosser.js'
import presetMargin from '../../lib/preset/margin.js'

const { gloss } = glosser(
  presetMargin({ baseUnit: '0.25rem' })
)

function testStyle(input, style) {
  it(
    input,
    () => expect(gloss(input)).toStrictEqual({ style })
  )
}

testStyle('ml',  { 'margin-left': '0.25rem' })
testStyle('ml2', { 'margin-left': '0.5rem' })
testStyle('ml4', { 'margin-left': '1rem' })

testStyle('mr',  { 'margin-right': '0.25rem' })
testStyle('mr2', { 'margin-right': '0.5rem' })
testStyle('mr4', { 'margin-right': '1rem' })

testStyle('mt',  { 'margin-top': '0.25rem' })
testStyle('mt2', { 'margin-top': '0.5rem' })
testStyle('mt4', { 'margin-top': '1rem' })

testStyle('mb',  { 'margin-bottom': '0.25rem' })
testStyle('mb2', { 'margin-bottom': '0.5rem' })
testStyle('mb4', { 'margin-bottom': '1rem' })

