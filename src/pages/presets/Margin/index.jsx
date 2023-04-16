import React      from 'react'
import Example    from '../../../site/Example.jsx'
import MarginSrc  from './examples/Margin.jsx?raw'
import Margin     from './examples/Margin.jsx'
import { presetMargin, glosser } from '../../../../lib/index.js'
import Expansions from '../../../site/Expansions.jsx'

const { gloss } = glosser(
  presetMargin(),
)

const MarginExamples = () =>
  <div>
    <h1>Margin</h1>
    <Example
      Element={Margin} code={MarginSrc}
      caption="Buttons"
    >
      <p>
        The <code>presetMargin</code> preset implements rules for creating
        styles that add margins around an element.
      </p>
    </Example>
    <p>
      A margin rule can start with <code>m</code>, <code>mar</code> or{' '}
      <code>margin</code>.  If nothing else is specified then it will apply
      one unit of margin to all sides of the element.  The default unit size
      is <code>0.25rem</code> which equates to <code>4px</code> in the usual
      case.
    </p>
    <p>
      It can then be followed by an optional qualifier:{' '}
      <code>t</code>, <code>r</code>, <code>b</code>, <code>l</code> to
      apply the margin to the top, right, bottom or left, respectively,{' '}
      <code>x</code> or <code>h</code> (horizontal) to apply it to the left
      and right sides, or <code>y</code> or <code>v</code> (vertical) to apply
      it to the top and bottom.
    </p>
    <p>
      It can then be followed by a unit count. This is a multiple of the
      default unit size, e.g. a value of <code>6</code> is{' '}
      <code>6 x 0.25rem</code> or <code>1.5rem</code>.
    </p>
    <p>
      The separate parts can be joined together, e.g. <code>marl2</code> or
      separated by hyphens, e.g. <code>mar-l-2</code>.
    </p>
    <p>
      Alternately the margin can be specified as 1 to 4 numbers, as per the{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin">usual rules</a>{' '}
      for the <code>margin</code> property in CSS.  If one number is specified
      it is applied to all four side.  If two numbers are specified then the
      first is applied to the top and bottom, while the second is applied to
      the left and right.  Three numbers are applied to the top, right and
      bottom.  Four number are applied to the top, right, bottom and left.
      e.g. <code>margin-1</code>, <code>margin-1-2</code>,{' '}
      <code>margin-1-2-3</code> or <code>margin-1-2-3-4</code>.
    </p>
    <Expansions
      gloss={gloss}
      inputs={[
        'm', 'mar', 'margin',
        'm2', 'mar2', 'margin2', 'm-2', 'mar-2', 'margin-2',
        'mt3', 'm-t-3', 'mart3', 'mar-t-3', 'margin-t-3',
        'mr2', 'mb2', 'ml2',
        'marx3', 'mar-x-3', 'marh3', 'mar-h-3', 'mar-y-3', 'mar-v-3',
        'm1-2', 'm-1-2', 'mar-1-2', 'margin-1-2',
        'margin-1-2-3', 'margin-1-2-3-4'
      ]}
    />
  </div>
export default MarginExamples

