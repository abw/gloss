import { it, expect } from 'vitest'
import { kebabToCamel, kebabToCamelObject } from '../../lib/utils.js'

it(
  'foo',
  () => {
    expect(kebabToCamel('foo')).toBe('foo')
  }
)
it(
  'foo-bar',
  () => {
    expect(kebabToCamel('foo-bar')).toBe('fooBar')
  }
)
it(
  'foo-bar-baz',
  () => {
    expect(kebabToCamel('foo-bar-baz')).toBe('fooBarBaz')
  }
)
it(
  'object',
  () => {
    expect(
      kebabToCamelObject({
        foo: 10,
        'padding-left': '10px',
        'margin-right': '20px'
      })
    ).toStrictEqual({
      foo: 10,
      paddingLeft: '10px',
      marginRight: '20px',
    })
  }
)
