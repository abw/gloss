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
testStyle('ml', { 'margin-left': '0.5rem' })
testStyle('m-l', { 'margin-left': '0.5rem' })
testStyle('ml2', { 'margin-left': '1rem' })
testStyle('m-l2', { 'margin-left': '1rem' })
testStyle('ml-2', { 'margin-left': '1rem' })
testStyle('m-l-2', { 'margin-left': '1rem' })
testStyle('marl2', { 'margin-left': '1rem' })
testStyle('mar-l2', { 'margin-left': '1rem' })
testStyle('mar-l-2', { 'margin-left': '1rem' })

// right
testStyle('mr', { 'margin-right': '0.5rem' })
testStyle('m-r', { 'margin-right': '0.5rem' })
testStyle('mr2', { 'margin-right': '1rem' })
testStyle('m-r2', { 'margin-right': '1rem' })
testStyle('mr-2', { 'margin-right': '1rem' })
testStyle('m-r-2', { 'margin-right': '1rem' })
testStyle('mar-r2', { 'margin-right': '1rem' })
testStyle('mar-r-2', { 'margin-right': '1rem' })

// top
testStyle('mt', { 'margin-top': '0.5rem' })
testStyle('m-t', { 'margin-top': '0.5rem' })
testStyle('mt2', { 'margin-top': '1rem' })
testStyle('m-t2', { 'margin-top': '1rem' })
testStyle('mt-2', { 'margin-top': '1rem' })
testStyle('m-t-2', { 'margin-top': '1rem' })
testStyle('mar-t2', { 'margin-top': '1rem' })
testStyle('mar-t-2', { 'margin-top': '1rem' })

// bottom
testStyle('mb', { 'margin-bottom': '0.5rem' })
testStyle('m-b', { 'margin-bottom': '0.5rem' })
testStyle('mb2', { 'margin-bottom': '1rem' })
testStyle('m-b2', { 'margin-bottom': '1rem' })
testStyle('mb-2', { 'margin-bottom': '1rem' })
testStyle('m-b-2', { 'margin-bottom': '1rem' })
testStyle('mar-b2', { 'margin-bottom': '1rem' })
testStyle('mar-b-2', { 'margin-bottom': '1rem' })

// horizontal
testStyle('mh', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })
testStyle('mh2', { 'margin-left': '1rem', 'margin-right': '1rem' })
testStyle('m-h2', { 'margin-left': '1rem', 'margin-right': '1rem' })
testStyle('mh-2', { 'margin-left': '1rem', 'margin-right': '1rem' })
testStyle('m-h-2', { 'margin-left': '1rem', 'margin-right': '1rem' })
testStyle('mar-h2', { 'margin-left': '1rem', 'margin-right': '1rem' })
testStyle('mar-h-2', { 'margin-left': '1rem', 'margin-right': '1rem' })

// x
testStyle('mx', { 'margin-left': '0.5rem', 'margin-right': '0.5rem' })
testStyle('mx2', { 'margin-left': '1rem', 'margin-right': '1rem' })
testStyle('m-x2', { 'margin-left': '1rem', 'margin-right': '1rem' })
testStyle('mx-2', { 'margin-left': '1rem', 'margin-right': '1rem' })
testStyle('m-x-2', { 'margin-left': '1rem', 'margin-right': '1rem' })
testStyle('mar-x2', { 'margin-left': '1rem', 'margin-right': '1rem' })
testStyle('mar-x-2', { 'margin-left': '1rem', 'margin-right': '1rem' })

// vertical
testStyle('mv', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })
testStyle('mv2', { 'margin-top': '1rem', 'margin-bottom': '1rem' })
testStyle('m-v2', { 'margin-top': '1rem', 'margin-bottom': '1rem' })
testStyle('mv-2', { 'margin-top': '1rem', 'margin-bottom': '1rem' })
testStyle('m-v-2', { 'margin-top': '1rem', 'margin-bottom': '1rem' })
testStyle('mar-v2', { 'margin-top': '1rem', 'margin-bottom': '1rem' })
testStyle('mar-v-2', { 'margin-top': '1rem', 'margin-bottom': '1rem' })

// y
testStyle('my', { 'margin-top': '0.5rem', 'margin-bottom': '0.5rem' })
testStyle('my2', { 'margin-top': '1rem', 'margin-bottom': '1rem' })
testStyle('m-y2', { 'margin-top': '1rem', 'margin-bottom': '1rem' })
testStyle('my-2', { 'margin-top': '1rem', 'margin-bottom': '1rem' })
testStyle('m-y-2', { 'margin-top': '1rem', 'margin-bottom': '1rem' })
testStyle('mar-y2', { 'margin-top': '1rem', 'margin-bottom': '1rem' })
testStyle('mar-y-2', { 'margin-top': '1rem', 'margin-bottom': '1rem' })
