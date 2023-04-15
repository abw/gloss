import { matchFloatUnit } from '../utils.js'

export function presetPadding(options={ baseUnit:'0.5rem' }) {
  const [size, units] = matchFloatUnit(options.baseUnit)
  return {
    preset: 'padding',
    rules: [
      [
        // padding left
        /p(?:ad)?(?:-)?[lxh](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'padding-left': `${n * size}${units}` }
        })
      ],
      [
        // padding right
        /p(?:ad)?(?:-)?[rxh](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'padding-right': `${n * size}${units}` }
        })
      ],
      [
        // padding top
        /p(?:ad)?(?:-)?[tyv](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'padding-top': `${n * size}${units}` }
        })
      ],
      [
        // padding bottom
        /p(?:ad)?(?:-)?[byv](?:-)?(\d+)?$/,
        ([, n=1]) => ({
          style: { 'padding-bottom': `${n * size}${units}` }
        })
      ]
    ]
  }
}

export default presetPadding