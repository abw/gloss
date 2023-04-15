import { it, expect } from 'vitest'
import glosser from '../../lib/glosser.js'
import presetPadding from '../../lib/preset/padding.js'

const { gloss } = glosser(
  presetPadding()
)

function testStyle(input, style) {
  it(
    input,
    () => expect(gloss(input)).toStrictEqual({ style })
  )
}

// left
testStyle('pl', { 'padding-left': '0.25rem' })
testStyle('p-l', { 'padding-left': '0.25rem' })
testStyle('pl2', { 'padding-left': '0.5rem' })
testStyle('p-l2', { 'padding-left': '0.5rem' })
testStyle('pl-2', { 'padding-left': '0.5rem' })
testStyle('p-l-2', { 'padding-left': '0.5rem' })
testStyle('padl2', { 'padding-left': '0.5rem' })
testStyle('pad-l2', { 'padding-left': '0.5rem' })
testStyle('pad-l-2', { 'padding-left': '0.5rem' })

// right
testStyle('pr', { 'padding-right': '0.25rem' })
testStyle('p-r', { 'padding-right': '0.25rem' })
testStyle('pr2', { 'padding-right': '0.5rem' })
testStyle('p-r2', { 'padding-right': '0.5rem' })
testStyle('pr-2', { 'padding-right': '0.5rem' })
testStyle('p-r-2', { 'padding-right': '0.5rem' })
testStyle('pad-r2', { 'padding-right': '0.5rem' })
testStyle('pad-r-2', { 'padding-right': '0.5rem' })

// top
testStyle('pt', { 'padding-top': '0.25rem' })
testStyle('p-t', { 'padding-top': '0.25rem' })
testStyle('pt2', { 'padding-top': '0.5rem' })
testStyle('p-t2', { 'padding-top': '0.5rem' })
testStyle('pt-2', { 'padding-top': '0.5rem' })
testStyle('p-t-2', { 'padding-top': '0.5rem' })
testStyle('pad-t2', { 'padding-top': '0.5rem' })
testStyle('pad-t-2', { 'padding-top': '0.5rem' })

// bottom
testStyle('pb', { 'padding-bottom': '0.25rem' })
testStyle('p-b', { 'padding-bottom': '0.25rem' })
testStyle('pb2', { 'padding-bottom': '0.5rem' })
testStyle('p-b2', { 'padding-bottom': '0.5rem' })
testStyle('pb-2', { 'padding-bottom': '0.5rem' })
testStyle('p-b-2', { 'padding-bottom': '0.5rem' })
testStyle('pad-b2', { 'padding-bottom': '0.5rem' })
testStyle('pad-b-2', { 'padding-bottom': '0.5rem' })

// horizontal
testStyle('ph', { 'padding-left': '0.25rem', 'padding-right': '0.25rem' })
testStyle('ph2', { 'padding-left': '0.5rem', 'padding-right': '0.5rem' })
testStyle('p-h2', { 'padding-left': '0.5rem', 'padding-right': '0.5rem' })
testStyle('ph-2', { 'padding-left': '0.5rem', 'padding-right': '0.5rem' })
testStyle('p-h-2', { 'padding-left': '0.5rem', 'padding-right': '0.5rem' })
testStyle('pad-h2', { 'padding-left': '0.5rem', 'padding-right': '0.5rem' })
testStyle('pad-h-2', { 'padding-left': '0.5rem', 'padding-right': '0.5rem' })

// x
testStyle('px', { 'padding-left': '0.25rem', 'padding-right': '0.25rem' })
testStyle('px2', { 'padding-left': '0.5rem', 'padding-right': '0.5rem' })
testStyle('p-x2', { 'padding-left': '0.5rem', 'padding-right': '0.5rem' })
testStyle('px-2', { 'padding-left': '0.5rem', 'padding-right': '0.5rem' })
testStyle('p-x-2', { 'padding-left': '0.5rem', 'padding-right': '0.5rem' })
testStyle('pad-x2', { 'padding-left': '0.5rem', 'padding-right': '0.5rem' })
testStyle('pad-x-2', { 'padding-left': '0.5rem', 'padding-right': '0.5rem' })

// vertical
testStyle('pv', { 'padding-top': '0.25rem', 'padding-bottom': '0.25rem' })
testStyle('pv2', { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' })
testStyle('p-v2', { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' })
testStyle('pv-2', { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' })
testStyle('p-v-2', { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' })
testStyle('pad-v2', { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' })
testStyle('pad-v-2', { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' })

// y
testStyle('py', { 'padding-top': '0.25rem', 'padding-bottom': '0.25rem' })
testStyle('py2', { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' })
testStyle('p-y2', { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' })
testStyle('py-2', { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' })
testStyle('p-y-2', { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' })
testStyle('pad-y2', { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' })
testStyle('pad-y-2', { 'padding-top': '0.5rem', 'padding-bottom': '0.5rem' })

testStyle('p2', { 'padding': '0.5rem' })
testStyle('p2-4', { 'padding': '0.5rem 1rem' })
testStyle('p-2', { 'padding': '0.5rem' })
testStyle('p-2-4', { 'padding': '0.5rem 1rem' })
testStyle('p-2-4-6', { 'padding': '0.5rem 1rem 1.5rem' })
testStyle('p-2-4-6-8', { 'padding': '0.5rem 1rem 1.5rem 2rem' })