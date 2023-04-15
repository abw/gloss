import { it, expect } from 'vitest'
import glosser from '../../lib/glosser.js'
import presetMargin from '../../lib/preset/margin.js'

const { gloss } = glosser(
  presetMargin()
)

function testStyle(input, style) {
  it(
    input,
    () => expect(gloss(input)).toStrictEqual({ style })
  )
}

// left
testStyle('ml', { 'margin-left': '0.25rem' })
testStyle('m-l', { 'margin-left': '0.25rem' })
testStyle('ml2', { 'margin-left': '0.5rem' })
testStyle('m-l2', { 'margin-left': '0.5rem' })
testStyle('ml-2', { 'margin-left': '0.5rem' })
testStyle('m-l-2', { 'margin-left': '0.5rem' })
testStyle('marl2', { 'margin-left': '0.5rem' })
testStyle('mar-l2', { 'margin-left': '0.5rem' })
testStyle('mar-l-2', { 'margin-left': '0.5rem' })

// right
testStyle('mr', { 'margin-right': '0.25rem' })
testStyle('m-r', { 'margin-right': '0.25rem' })
testStyle('mr2', { 'margin-right': '0.5rem' })
testStyle('m-r2', { 'margin-right': '0.5rem' })
testStyle('mr-2', { 'margin-right': '0.5rem' })
testStyle('m-r-2', { 'margin-right': '0.5rem' })
testStyle('mar-r2', { 'margin-right': '0.5rem' })
testStyle('mar-r-2', { 'margin-right': '0.5rem' })

// top
testStyle('mt', { 'margin-top': '0.25rem' })
testStyle('m-t', { 'margin-top': '0.25rem' })
testStyle('mt2', { 'margin-top': '0.5rem' })
testStyle('m-t2', { 'margin-top': '0.5rem' })
testStyle('mt-2', { 'margin-top': '0.5rem' })
testStyle('m-t-2', { 'margin-top': '0.5rem' })
testStyle('mar-t2', { 'margin-top': '0.5rem' })
testStyle('mar-t-2', { 'margin-top': '0.5rem' })

// bottom
testStyle('mb', { 'margin-bottom': '0.25rem' })
testStyle('m-b', { 'margin-bottom': '0.25rem' })
testStyle('mb2', { 'margin-bottom': '0.5rem' })
testStyle('m-b2', { 'margin-bottom': '0.5rem' })
testStyle('mb-2', { 'margin-bottom': '0.5rem' })
testStyle('m-b-2', { 'margin-bottom': '0.5rem' })
testStyle('mar-b2', { 'margin-bottom': '0.5rem' })
testStyle('mar-b-2', { 'margin-bottom': '0.5rem' })

// horizontal
testStyle('mh', { 'margin-left': '0.25rem', 'margin-right': '0.25rem' })
testStyle('mh2', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })
testStyle('m-h2', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })
testStyle('mh-2', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })
testStyle('m-h-2', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })
testStyle('mar-h2', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })
testStyle('mar-h-2', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })

// x
testStyle('mx', { 'margin-left': '0.25rem', 'margin-right': '0.25rem' })
testStyle('mx2', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })
testStyle('m-x2', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })
testStyle('mx-2', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })
testStyle('m-x-2', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })
testStyle('mar-x2', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })
testStyle('mar-x-2', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })

// vertical
testStyle('mv', { 'margin-top': '0.25rem', 'margin-bottom': '0.25rem' })
testStyle('mv2', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })
testStyle('m-v2', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })
testStyle('mv-2', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })
testStyle('m-v-2', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })
testStyle('mar-v2', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })
testStyle('mar-v-2', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })

// y
testStyle('my', { 'margin-top': '0.25rem', 'margin-bottom': '0.25rem' })
testStyle('my2', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })
testStyle('m-y2', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })
testStyle('my-2', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })
testStyle('m-y-2', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })
testStyle('mar-y2', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })
testStyle('mar-y-2', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })

testStyle('m2', { 'margin': '0.5rem' })
testStyle('m2-4', { 'margin': '0.5rem 1rem' })
testStyle('m-2', { 'margin': '0.5rem' })
testStyle('m-2-4', { 'margin': '0.5rem 1rem' })
testStyle('m-2-4-6', { 'margin': '0.5rem 1rem 1.5rem' })
testStyle('m-2-4-6-8', { 'margin': '0.5rem 1rem 1.5rem 2rem' })
testStyle('margin2', { 'margin': '0.5rem' })
testStyle('margin2-4', { 'margin': '0.5rem 1rem' })
testStyle('margin-2', { 'margin': '0.5rem' })
testStyle('margin-2-4', { 'margin': '0.5rem 1rem' })
testStyle('margin-2-4-6', { 'margin': '0.5rem 1rem 1.5rem' })
testStyle('margin-2-4-6-8', { 'margin': '0.5rem 1rem 1.5rem 2rem' })