import React      from 'react'
import gloss      from '../../lib/index.js'

const foo = 'The Foo'
const Demo = () =>
  <div>
    <h1>Demo</h1>
    <button {...gloss('button-red')}>Red Button</button>
    <button {...gloss`button-green marl`}>Green Button</button>
    <button {...gloss`button-orange ml2`}>Orange Button</button>
    <button {...gloss`button-green mar-l-3`}>Green Button</button>
    <button {...gloss`button-green ml`}>Green Button</button>
    <button {...gloss`button-green ml4`}>Green Button</button>
    <button {...gloss`button-green m-l-2`}>Green Button</button>
    <button {...gloss`button-green marl2`}>Green Button</button>
    <button>Grey Button</button>
    <button {...gloss`marl`}>Grey Button</button>
  </div>

export default Demo

