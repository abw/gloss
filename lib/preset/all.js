import { BASE_UNIT } from '../constants.js'
import presetMargin from './margin.js'
import presetPadding from './padding.js'
import presetRadius from './radius.js'

export function presetAll(
  options={ baseUnit: BASE_UNIT }
) {
  return [
    presetMargin(options),
    presetPadding(options),
    presetRadius(options)
  ]
}

export default presetAll