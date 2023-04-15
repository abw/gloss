export function isString(value) {
  return typeof value === 'string'
}

export function isArray(value) {
  return Array.isArray(value)
}

export function isFunction(value) {
  return typeof value === 'function'
}

export function isRegExp(value) {
  return value instanceof RegExp
}

export function isNull(value) {
  return value === null
}

export function isObject(value) {
  return typeof value === 'object'
    && ! isArray(value)
    && ! isNull(value)
}

export function matchFloatUnit(string) {
  // match a number and units, e.g. 0.5rem, 32px, etc.
  const match = string.match(/([\d.]+)(\w+)$/)
  if (! match) {
    throw `Invalid unit: ${string}`
  }
  return [ parseFloat(match[1]), match[2]]
}

export function mergeRules(...rules) {
  return rules.reduce(
    (merged, rule) => {
      if (isArray(rule)) {
        merged.push(rule)
      }
      else if (isObject(rule)) {
        if (rule.preset && isArray(rule.rules)) {
          merged.push(...rule.rules)
        }
        else {
          merged.push(rule)
        }
      }
      else {
        throw `Invalid preset/rule: ${rule}`
      }
      return merged
    },
    [ ]
  )
}

export function kebabToCamel(kebab) {
  return kebab.split('-').map(
    (word, n) => n
      ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      : word
  ).join('')
}

export function kebabToCamelObject(object) {
  return Object.entries(object).reduce(
    (result, [key, value]) => {
      result[kebabToCamel(key)] = value
      return result
    },
    { }
  )
}

export const resultAttrs = (result) => {
  let attrs = { }

  if (result.class.length) {
    attrs.class = result.class.join(' ')
  }

  if (Object.keys(result.style).length) {
    attrs.style = result.style
  }

  return attrs
}
