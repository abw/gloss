import React      from 'react'
import Example    from '../../../site/Example.jsx'
import SizeSrc    from './examples/Size.jsx?raw'
import Size       from './examples/Size.jsx'
import { presetSize, glosser } from '../../../../lib/index.js'
import Expansions from '../../../site/Expansions.jsx'

const { gloss } = glosser(
  presetSize(),
)

const SizeExamples = () =>
  <div>
    <h1>Size</h1>
    <Example
      Element={Size} code={SizeSrc}
      caption="Size"
    >
      <p>
        The <code>presetSize</code> preset implements rules for creating
        styles that set the text size.
      </p>
    </Example>
    <p>
      A size rule should start with <code>sz</code>or{' '}
      <code>size</code>.  If nothing else is specified then it will set
      the size to 1 unit.  The default unit size is <code>1rem</code> which
      equates to <code>16px</code> in the usual case.
    </p>
    <p>
      It can then be followed by a unit count. This is a multiple of the
      default unit size, e.g. a value of <code>1.5</code> is{' '}
      <code>1.5 x 1rem</code> or <code>1.5rem</code>.
    </p>
    <p>
      The separate parts can be joined together, e.g. <code>size2</code> or
      separated by hyphens, e.g. <code>size-2</code>.
    </p>
    <p>
      The line height can be set with a rule starting <code>lh</code>,{' '}
      <code>height</code> or <code>line-height</code>.  The units are
      numerical multipliers of the font size.  This needs some work to
      accommodate cases where you want to set the height by some other units,
      e.g. pixels, rems, etc.
    </p>
    <Expansions
      gloss={gloss}
      inputs={[
        'sz', 'size',
        'sz1.5', 'size1.5', 'size-1.5',
        'sz2', 'size-2',
        'lh2', 'height2', 'line-height2',
        'lh-1.5', 'height-1.5', 'line-height-1.5',
      ]}
    />
  </div>
export default SizeExamples

