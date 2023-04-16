import { SHADOW_UNIT } from '../constants.js'
import { matchFloatUnit } from '../utils.js'

export function presetShadow( options={ } ) {
  const [size, units] = matchFloatUnit(
    options.shadowUnit || SHADOW_UNIT
  )
  const { x=1, y=2, blur=3 } = options

  return {
    preset: 'shadow',
    rules: [
      [
        /^sha(?:dow)?(?:-)?(\d+)?(?:-(\d+))?$/,
        ([, n=1, a=5]) => {
          const ux = `${n * x * size}${units}`
          const uy = `${n * y * size}${units}`
          const ub = `${n * blur * size}${units}`
          const o  = (a / 100).toFixed(2)
          return {
            style: { 'box-shadow': `${ux} ${uy} ${ub} rgba(0, 0, 0, ${o})` }
          }
        }
      ],
    ]
  }
}

export default presetShadow