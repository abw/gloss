import { applyGloss } from './apply.js'
import { isArray, mergeRules, resultAttrs } from './utils.js'

export function glosser(...args) {
  const rules = mergeRules(...args)
  const gloss = specs => {
    // allow for tagged template literal passing array
    const spec = isArray(specs)
      ? specs[0]
      : specs
    const result = applyGloss(spec, rules)
    return resultAttrs(result)
    // const attrs = resultAttrs(result)
    // console.log('RESULT: ', attrs)
    // return attrs

  }
  return { rules, gloss }
}

export default glosser