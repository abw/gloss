import React      from 'react'
import Example    from '../../../site/Example.jsx'
import PaddingSrc  from './examples/Padding.jsx?raw'
import Padding     from './examples/Padding.jsx'
import { presetPadding, glosser } from '../../../../lib/index.js'
import Expansions from '../../../site/Expansions.jsx'

const { gloss } = glosser(
  presetPadding(),
)

const PaddingExamples = () =>
  <div>
    <h1>Padding</h1>
    <Example
      Element={Padding} code={PaddingSrc}
      caption="Buttons"
    >
      <p>
        The <code>presetPadding</code> preset implements rules for creating
        styles that add padding around an element.
      </p>
    </Example>
    <p>
      A padding rule can start with <code>p</code>, <code>pad</code> or{' '}
      <code>padding</code>.  If nothing else is specified then it will apply
      one unit of padding to all sides of the element.  The default unit size
      is <code>0.25rem</code> which equates to <code>4px</code> in the usual
      case.
    </p>
    <p>
      It can then be followed by an optional qualifier:{' '}
      <code>t</code>, <code>r</code>, <code>b</code>, <code>l</code> to
      apply the padding to the top, right, bottom or left, respectively,{' '}
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
      The separate parts can be joined together, e.g. <code>padl2</code> or
      separated by hyphens, e.g. <code>pad-l-2</code>.
    </p>
    <p>
      Alternately the padding can be specified as 1 to 4 numbers, as per the{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding">usual rules</a>{' '}
      for the <code>padding</code> property in CSS.  If one number is specified
      it is applied to all four side.  If two numbers are specified then the
      first is applied to the top and bottom, while the second is applied to
      the left and right.  Three numbers are applied to the top, right and
      bottom.  Four number are applied to the top, right, bottom and left.
      e.g. <code>padding-1</code>, <code>padding-1-2</code>,{' '}
      <code>padding-1-2-3</code> or <code>padding-1-2-3-4</code>.
    </p>
    <Expansions
      gloss={gloss}
      inputs={[
        'p', 'pad', 'padding',
        'p2', 'pad2', 'padding2', 'p-2', 'pad-2', 'padding-2',
        'pt3', 'p-t-3', 'padt3', 'pad-t-3', 'padding-t-3',
        'pr2', 'pb2', 'pl2',
        'padx3', 'pad-x-3', 'padh3', 'pad-h-3', 'pad-y-3', 'pad-v-3',
        'p1-2', 'p-1-2', 'pad-1-2', 'padding-1-2',
        'padding-1-2-3', 'padding-1-2-3-4'
      ]}
    />
  </div>
export default PaddingExamples

