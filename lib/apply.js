import { isArray, isFunction, isObject, isString } from './utils.js'

const DEBUG = false
const debug = DEBUG
  ? (...args) => console.log(...args)
  : () => { }

export const applyGloss = (spec, rules, result={class:[], style:{}}) => {
  debug(`applyGloss [${spec}]`)

  const parts = spec.split(/\s+/)

  for (let part of parts) {
    debug(` - part:${part}`)
    let matched = false

    for (let rule of rules) {
      if (isObject(rule)) {
        if (applyObjectRule(part, rule, spec, rules, result)) {
          matched = true
        }
      }
      if (isArray(rule)) {
        if (applyArrayRule(part, rule, spec, rules, result)) {
          matched = true
        }
      }
    }
    if (! matched) {
      result.class.push(part)
    }
  }
  return result
}

export const applyObjectRule = (part, rule, name, styles, result) => {
  debug(` - applyObjectRule [${part}]`)
  const action = rule[part]

  return action
    ? applyAction(part, action, name, styles, result)
    : false
}

export const applyArrayRule = (part, rule, name, styles, result) => {
  debug(` - applyArrayRule [${part}] => `, rule)
  const [regex, action] = rule
  const match = regex.exec(part)

  if (! match) {
    return false
  }
  if (isFunction(action)) {
    return applyAction(part, action(match), name, styles, result)
  }
  else {
    return applyAction(part, action, name, styles, result)
  }
}

export const applyAction = (part, action, name, styles, result) => {
  debug(` ✓ [${part}] =>`, action)

  if (isString(action)) {
    applyGloss(action, styles, result)
  }
  else {
    if (action.apply) {
      applyGloss(action.apply, styles, result)
    }
    if (action.style) {
      Object.assign(result.style, action.style)
    }
    if (action.class) {
      result.class.push(action.class)
    }
  }
  return result
}

export default applyGloss