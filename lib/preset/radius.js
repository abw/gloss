import { BASE_UNIT } from '../constants.js'
import { matchFloatUnit } from '../utils.js'

export function presetRadius( options={ } ) {
  const [size, units] = matchFloatUnit(
    options.radiusUnit || options.baseUnit || BASE_UNIT
  )

  return {
    preset: 'radius',
    rules: [
      [
        /^r(?:ad)?(?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'border-radius': `${n * size}${units}` }
        })
      ],
      [
        /^r(?:ad)?(?:-)?[tl]+(?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'border-radius-top-left': `${n * size}${units}` }
        })
      ],
      [
        /^r(?:ad)?(?:-)?[tr]+(?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'border-radius-top-right': `${n * size}${units}` }
        })
      ],
      [
        /^r(?:ad)?(?:-)?[bl]+(?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'border-radius-bottom-left': `${n * size}${units}` }
        })
      ],
      [
        /^r(?:ad)?(?:-)?[br]+(?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'border-radius-bottom-right': `${n * size}${units}` }
        })
      ],
    ]
  }
}

export default presetRadius