import React      from 'react'
import Example    from '../../../site/Example.jsx'
import ShadowSrc  from './examples/Shadow.jsx?raw'
import Shadow     from './examples/Shadow.jsx'
import { presetAll, glosser } from '../../../../lib/index.js'
import Expansions from '../../../site/Expansions.jsx'

const { gloss } = glosser(
  presetAll(),
)

const ShadowExamples = () =>
  <div>
    <h1>Shadow</h1>
    <Example
      Element={Shadow} code={ShadowSrc}
      caption="Shadows"
    >
      <p>
        The <code>presetShadow</code> preset implements rules for creating
        styles that a box shadow.
      </p>
    </Example>
    <p>
      A shadow rule can start with <code>sha</code>, or{' '}
      <code>shadow</code>.  If nothing else is specified then it will apply
      one unit of shadow.  The default unit size is <code>1px</code>.
      This creates an offset of <code>1px</code> in the x direction,{' '}
      <code>2px</code> in the y direction and a blur radius of{' '}
      <code>3px</code>.  These ratios can set using the{' '}
      <code>x</code>, <code>y</code> and <code>blur</code> preset options.
    </p>
    <p>
      It can then be followed by a multiplier. This is a multiple of the
      default unit sizes, e.g. a value of <code>2</code> equates to{' '}
      an x-offset of <code>2px</code>, a y-offset of <code>4px</code> and
      a blur radius of <code>6px</code>.
    </p>
    <p>
      It can then be followed by a opacity value. This is a percentage
      from 1 (<code>opacity=0.01</code>) to 100 (<code>opacity=1</code>).
    </p>
    <p>
      The separate parts can be joined together, e.g. <code>shadow2</code> or
      separated by hyphens, e.g. <code>shadow-2</code>.
    </p>
    <Expansions
      gloss={gloss}
      inputs={[
        'sha', 'shadow',
        'sha2', 'shadow2', 'sha-2', 'shadow-2',
        'shadow-4-20'
      ]}
    />
  </div>
export default ShadowExamples

