import { BASE_UNIT } from '../constants.js'
import { isDefined, matchFloatUnit } from '../utils.js'

export function presetPadding( options={ } ) {
  const [size, units] = matchFloatUnit(
    options.paddingUnit || options.baseUnit || BASE_UNIT
  )

  return {
    preset: 'padding',
    rules: [
      [
        /^p(?:ad(?:ding)?)?(?:-)?(\d+)?(?:-(\d+))?(?:-(\d+))?(?:-(\d+))?$/,
        ([, t=1, r, b, l]) => {
          const padding = [t, r, b, l]
            .filter(isDefined)
            .map( p => `${p * size}${units}` )
            .join(' ')
          return {
            style: { padding }
          }
        }
      ],
      [
        /^p(?:ad(?:ding)?)?(?:-)?[lxh](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'padding-left': `${n * size}${units}` }
        })
      ],
      [
        /^p(?:ad(?:ding)?)?(?:-)?[rxh](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'padding-right': `${n * size}${units}` }
        })
      ],
      [
        /^p(?:ad(?:ding)?)?(?:-)?[tyv](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'padding-top': `${n * size}${units}` }
        })
      ],
      [
        /^p(?:ad(?:ding)?)?(?:-)?[byv](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'padding-bottom': `${n * size}${units}` }
        })
      ]
    ]
  }
}

export default presetPadding