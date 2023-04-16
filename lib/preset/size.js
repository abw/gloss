import { SIZE_UNIT } from '../constants.js'
import { matchFloatUnit } from '../utils.js'

export function presetSize( options={ } ) {
  const [size, units] = matchFloatUnit(
    options.sizeUnit || SIZE_UNIT
  )

  return {
    preset: 'size',
    rules: [
      [
        /^(?:sz|size)(?:-)?([\d.]+)?$/,
        ([, s=1]) => ({
          style: { 'font-size': `${s * size}${units}` }
        })
      ],
      [
        /^(?:lh|height|line-height)(?:-)?([\d.]+)?$/,
        ([, s=1]) => ({
          style: { 'line-height': s }
        })
      ],
    ]
  }
}

export default presetSize