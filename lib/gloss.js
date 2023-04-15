import React from 'react'
import { isArray, isFunction, isObject, isString } from './utils.js';

const debug = (...args) => console.log(...args)

const glossStyles = [
  {
    mart: {
      style: {
        marginTop:    '0.5rem',
      }
    },
    mart2: {
      style: {
        marginTop:    '1rem',
      }
    },
    button: {
      style: {
        padding: '0.5rem 1rem',
        border: 0,
        borderRadius: '0.25rem'
      }
    },
    'button-red': {
      apply: 'button',
      style: {
        backgroundColor: '#d22',
        color: 'white',
      }
    },
    'button-green': {
      apply: 'button',
      style: {
        backgroundColor: '#2a2',
        color: 'white',
      }
    }
  },
  [
    // margin left
    /m(?:ar)?(?:-)?[lxh](?:-)?(\d+)?$/,
    ([_, n=1]) => ({ style: { marginLeft: `${n * 0.5}rem` }})
  ],
  [
    // margin right
    /m(?:ar)?(?:-)?[rxh](?:-)?(\d+)?$/,
    ([_, n=1]) => ({ style: { marginRight: `${n * 0.5}rem` }})
  ],
  [
    // margin top
    /m(?:ar)?(?:-)?[tyv](?:-)?(\d+)?$/,
    ([_, n=1]) => ({ style: { marginTop: `${n * 0.5}rem` }})
  ],
  [
    // margin bottom
    /m(?:ar)?(?:-)?[byv](?:-)?(\d+)?$/,
    ([_, n=1]) => ({ style: { marginBottom: `${n * 0.5}rem` }})
  ]
]

export const gloss = (specs) => {
  // allow for tagged template literal passing array
  const spec = isArray(specs)
    ? specs[0]
    : specs
  const rules = glossStyles;

  const result = applyGloss(spec, rules)

  return glossAttrs(gloss, result)
}


export const applyGloss = (spec, rules, result={classes:[], style:{}}) => {
  debug(`applyGloss [${spec}]`);

  const parts = spec.split(/\s+/)

  for (let part of parts) {
    let matched = false;
    for (let rule of rules) {
      if (isObject(rule)) {
        if (applyObjectRule(part, rule, spec, rules, result)) {
          matched = true;
        }
      }
      if (isArray(rule)) {
        if (applyArrayRule(part, rule, spec, rules, result)) {
          matched = true;
        }
      }
      if (! matched) {
        result.classes.push(part)
      }
    }
  }
  return result
}

export const applyObjectRule = (part, rule, name, styles, result) => {
  debug(` - applyObjectRule [${part}]`);

  const action = rule[part];
  return action
    ? applyAction(part, action, name, styles, result)
    : false
}

export const applyArrayRule = (part, rule, name, styles, result) => {
  debug(` - applyArrayRule [${part}] => `, rule);
  const [regex, action] = rule;

  const match = regex.exec(part);
  if (! match) {
    return false
  }
  if (isFunction(action)) {
    return applyAction(part, action(match), name, styles, result)
    // console.log('TODO: action function');

    // return applyAction
  }
  else {
    return applyAction(part, action, name, styles, result)
  }
}

export const applyAction = (part, action, name, styles, result) => {
  debug(` ✓ [${part}] =>`, action);

  if (action.apply) {
    applyGloss(action.apply, styles, result)
  }
  if (action.style) {
    Object.assign(result.style, action.style)
  }
  if (action.class) {
    result.classes.push(action.class)
  }
  return result
}


// output result as object containing className and style, where appropriate
export const glossAttrs = (spec, result) => {
  let props = { }

  if (result.classes.length) {
    props.className = result.classes.join(' ')
  }

  if (Object.keys(result.style).length) {
    props.style = result.style
  }

  debug(` → gloss [${spec}] =>`, props);

  return props
}


export default gloss