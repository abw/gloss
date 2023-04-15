import React      from 'react'
import Example    from '../../../site/Example.jsx'
import ButtonsSrc from './examples/Buttons.jsx?raw'
import Buttons    from './examples/Buttons.jsx'

const ButtonsExamples = () =>
  <div>
    <h1>Buttons</h1>
    <Example
      Element={Buttons} code={ButtonsSrc}
      caption="Buttons"
    >
      <p>
        This example shows how you can define your own rules that apply
        other rules.  The <code>button</code> rule on line 6 applies the{' '}
        <code>radius-1</code>, <code>pad-2-4</code> and{' '}
        <code>border-none</code> rules.  These are defined in the presets
        loaded by <code>presetAll()</code> in line 4.
      </p>
      <p>
        The three rules for <code>button-red</code>, <code>button-blue</code>{' '}
        and <code>button-green</code> all apply the <code>button</code> rule
        and set the background colors (e.g. <code>bg-red-600</code>) and
        foreground colors (e.g. <code>fg-white</code>).
      </p>
    </Example>
  </div>

export default ButtonsExamples

