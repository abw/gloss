import { BASE_UNIT } from '../constants.js'
import { isDefined, matchFloatUnit } from '../utils.js'

export function presetRadius( options={ } ) {
  const [size, units] = matchFloatUnit(
    options.radiusUnit || options.baseUnit || BASE_UNIT
  )

  return {
    preset: 'radius',
    rules: [
      [
        /^r(?:ad(?:ius)?)?(?:-)?(\d+)?(?:-(\d+))?(?:-(\d+))?(?:-(\d+))?$/,
        ([, t=1, r, b, l]) => {
          const radius = [t, r, b, l]
            .filter(isDefined)
            .map( r => `${r * size}${units}` )
            .join(' ')
          return {
            style: { 'border-radius': radius }
          }
        }
      ],
      [
        /^r(?:ad(?:ius)?)?(?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'border-radius': `${n * size}${units}` }
        })
      ],
      [
        /^r(?:ad(?:ius)?)?(?:-)?[tl]+(?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'border-radius-top-left': `${n * size}${units}` }
        })
      ],
      [
        /^r(?:ad(?:ius)?)?(?:-)?[tr]+(?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'border-radius-top-right': `${n * size}${units}` }
        })
      ],
      [
        /^r(?:ad(?:ius)?)?(?:-)?[bl]+(?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'border-radius-bottom-left': `${n * size}${units}` }
        })
      ],
      [
        /^r(?:ad(?:ius)?)?(?:-)?[br]+(?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'border-radius-bottom-right': `${n * size}${units}` }
        })
      ],
    ]
  }
}

export default presetRadius