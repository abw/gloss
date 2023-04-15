import { it, expect } from 'vitest'
import glosser from '../../lib/glosser.js'
import { presetRadius } from '../../lib/index.js'

const { gloss } = glosser(
  presetRadius()
)

function testStyle(input, style) {
  it(
    input,
    () => expect(gloss(input)).toStrictEqual({ style })
  )
}

testStyle('r', { 'border-radius': '0.25rem' })
testStyle('r2', { 'border-radius': '0.5rem' })
testStyle('rt2', { 'border-radius-top-left': '0.5rem', 'border-radius-top-right': '0.5rem' })
testStyle('rb2', { 'border-radius-bottom-left': '0.5rem', 'border-radius-bottom-right': '0.5rem' })
testStyle('rl2', { 'border-radius-top-left': '0.5rem', 'border-radius-bottom-left': '0.5rem' })
testStyle('rr2', { 'border-radius-top-right': '0.5rem', 'border-radius-bottom-right': '0.5rem' })
testStyle('rtl2', { 'border-radius-top-left': '0.5rem' })
testStyle('r-tl-2', { 'border-radius-top-left': '0.5rem' })
testStyle('rtr2', { 'border-radius-top-right': '0.5rem' })
testStyle('r-tr-2', { 'border-radius-top-right': '0.5rem' })
testStyle('rad-tr-2', { 'border-radius-top-right': '0.5rem' })

