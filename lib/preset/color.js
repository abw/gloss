import tailwindColors from '../../config/tailwindColors.js'
import { isString } from '../utils.js'

export function presetColor( options={ } ) {
  const colors = options.colors || tailwindColors
  const defShade = options.defaultShade || '500'
  const findColor = (hue, shade) => {
    const color = colors[hue]
    return color &&
      ( isString(color)
        ? color
        : color[shade || defShade] )
  }

  return {
    preset: 'color',
    rules: [
      [
        /^(?:fg(?:-?col(?:ou?r)?)?|text|col(?:ou?r)?)(?:-)?(\w+)(?:-(\d+))?$/,
        ([, hue, shade]) => {
          const color = findColor(hue, shade)
          return color
            ? { style: { color } }
            : false
        }
      ],
      [
        /^bg(?:-?col(?:ou?r)?)?(?:-)?(\w+)(?:-(\d+))?$/,
        ([, hue, shade]) => {
          const color = findColor(hue, shade)
          return color
            ? { style: { 'background-color': color } }
            : false
        }
      ],
      [
        /^(?:bd|b(?:or(?:der)?)?)(?:-?col(?:ou?r)?)?(?:-)?(\w+)(?:-(\d+))?$/,
        ([, hue, shade]) => {
          const color = findColor(hue, shade)
          return color
            ? { style: { 'border-color': color } }
            : false
        }
      ],
    ]
  }
}

export default presetColor