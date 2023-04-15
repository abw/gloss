import glosser from './glosser.js'
import { kebabToCamelObject } from './utils.js'

export function reactGlosser(...args) {
  const { rules, gloss } = glosser(...args)
  const reactGloss = specs => {
    let result = gloss(specs)
    if (result.style) {
      result.style = kebabToCamelObject(result.style)
    }
    return result
  }
  return { rules, gloss: reactGloss }
}

export default reactGlosser