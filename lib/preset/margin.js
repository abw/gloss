import { matchFloatUnit } from '../utils.js'

export function presetMargin(options={ baseUnit:'0.5rem' }) {
  const [size, units] = matchFloatUnit(options.baseUnit)
  return {
    preset: 'margin',
    rules: [
      [
        // margin left
        /m(?:ar)?(?:-)?[lxh](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'margin-left': `${n * size}${units}` }
        })
      ],
      [
        // margin right
        /m(?:ar)?(?:-)?[rxh](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'margin-right': `${n * size}${units}` }
        })
      ],
      [
        // margin top
        /m(?:ar)?(?:-)?[tyv](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'margin-top': `${n * size}${units}` }
        })
      ],
      [
        // margin bottom
        /m(?:ar)?(?:-)?[byv](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'margin-bottom': `${n * size}${units}` }
        })
      ]
    ]
  }
}

export default presetMargin