import borderStyles from '../../config/borderStyles.js'
import { BORDER_STYLE, BORDER_WIDTH } from '../constants.js'
import { isDefined, matchFloatUnit } from '../utils.js'

export function presetBorder( options={ } ) {
  const [size, units] = matchFloatUnit(
    options.borderWidth || BORDER_WIDTH
  )
  const defaultStyle = options.borderStyle || BORDER_STYLE
  const borderStyle  = (options.borderStyles || borderStyles).reduce(
    (styles, style) => {
      styles[style] = true
      return styles
    },
    { }
  )

  return {
    preset: 'border',
    rules: [
      [
        /^(?:bd|b(?:or(?:der)?)?)(?:-)?([a-z]+)?(?:-)?(\d+)?(?:-(\d+))?(?:-(\d+))?(?:-(\d+))?$/,
        ([, s=defaultStyle, t=size, r, b, l]) => {
          if (! borderStyle[s]) {
            return false
          }
          const border = [t, r, b, l]
            .filter(isDefined)
            .map( b => `${b}${units}` )
            .join(' ')

          return {
            style: {
              'border-style': s,
              'border-width': border
            }
          }
        }
      ],
    ]
  }
}

export default presetBorder