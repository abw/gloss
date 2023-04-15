import { BASE_UNIT } from '../constants.js'
import { isDefined, matchFloatUnit } from '../utils.js'

export function presetMargin( options={ } ) {
  const [size, units] = matchFloatUnit(
    options.marginUnit || options.baseUnit || BASE_UNIT
  )

  return {
    preset: 'margin',
    rules: [
      [
        /^m(?:ar(?:gin)?)?(?:-)?(\d+)?(?:-(\d+))?(?:-(\d+))?(?:-(\d+))?$/,
        ([, t=1, r, b, l]) => {
          const margin = [t, r, b, l]
            .filter(isDefined)
            .map( m => `${m * size}${units}` )
            .join(' ')
          return {
            style: { margin }
          }
        }
      ],
      [
        /^m(?:ar(?:gin)?)?(?:-)?[lxh](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'margin-left': `${n * size}${units}` }
        })
      ],
      [
        /^m(?:ar(?:gin)?)?(?:-)?[rxh](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'margin-right': `${n * size}${units}` }
        })
      ],
      [
        /^m(?:ar(?:gin)?)?(?:-)?[tyv](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'margin-top': `${n * size}${units}` }
        })
      ],
      [
        /^m(?:ar(?:gin)?)?(?:-)?[byv](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'margin-bottom': `${n * size}${units}` }
        })
      ]
    ]
  }
}

export default presetMargin