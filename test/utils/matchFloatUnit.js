import { it, expect } from 'vitest'
import { matchFloatUnit } from '../../lib/utils.js'

it(
  '32px',
  () => {
    const [n, unit] = matchFloatUnit('32px')
    expect(n).toBe(32)
    expect(unit).toBe('px')
  }
)
it(
  '0.5rem',
  () => {
    const [n, unit] = matchFloatUnit('0.5rem')
    expect(n).toBe(0.5)
    expect(unit).toBe('rem')
  }
)
