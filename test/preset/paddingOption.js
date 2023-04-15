import { it, expect } from 'vitest'
import glosser from '../../lib/glosser.js'
import presetPadding from '../../lib/preset/padding.js'

const { gloss } = glosser(
  presetPadding({ baseUnit: '0.25rem' })
)

function testStyle(input, style) {
  it(
    input,
    () => expect(gloss(input)).toStrictEqual({ style })
  )
}

testStyle('pl',  { 'padding-left': '0.25rem' })
testStyle('pl2', { 'padding-left': '0.5rem' })
testStyle('pl4', { 'padding-left': '1rem' })

testStyle('pr',  { 'padding-right': '0.25rem' })
testStyle('pr2', { 'padding-right': '0.5rem' })
testStyle('pr4', { 'padding-right': '1rem' })

testStyle('pt',  { 'padding-top': '0.25rem' })
testStyle('pt2', { 'padding-top': '0.5rem' })
testStyle('pt4', { 'padding-top': '1rem' })

testStyle('pb',  { 'padding-bottom': '0.25rem' })
testStyle('pb2', { 'padding-bottom': '0.5rem' })
testStyle('pb4', { 'padding-bottom': '1rem' })

