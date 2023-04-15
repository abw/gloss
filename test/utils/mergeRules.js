import { it, expect } from 'vitest'
import { mergeRules } from '../../lib/utils.js'

it(
  'merge two objects',
  () => {
    expect(
      mergeRules(
        {
          foo: 'this is foo',
        },
        {
          bar: 'this is bar',
        },
      )
    ).toStrictEqual([
      { foo: 'this is foo' },
      { bar: 'this is bar' }
    ])
  }
)

it(
  'merge two arrays',
  () => {
    expect(
      mergeRules(
        [ 10, 20 ],
        [ 30, 40 ]
      )
    ).toStrictEqual([
      [ 10, 20 ],
      [ 30, 40 ],
    ])
  }
)

it(
  'merge two presets',
  () => {
    expect(
      mergeRules(
        {
          preset: 'one',
          rules: [10, 20]
        },
        {
          preset: 'two',
          rules: [30, 40]
        },
      )
    ).toStrictEqual([
      10, 20, 30, 40
    ])
  }
)

it(
  'merge two complex presets',
  () => {
    expect(
      mergeRules(
        {
          preset: 'one',
          rules: [
            { foo: 10 },
            [11, 12]
          ]
        },
        {
          preset: 'two',
          rules: [
            { bar: 20 },
            [ 21, 22 ]
          ]
        },
      )
    ).toStrictEqual([
      { foo: 10 },
      [11, 12],
      { bar: 20 },
      [ 21, 22 ]
    ])
  }
)
