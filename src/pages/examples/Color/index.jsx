import React      from 'react'
import Example    from '../../../site/Example.jsx'
import ColorSrc   from './examples/Color.jsx?raw'
import Color      from './examples/Color.jsx'
import { presetColor, glosser } from '../../../../lib/index.js'
import Expansions from '../../../site/Expansions.jsx'

const { gloss } = glosser(
  presetColor(),
)

const ColorExamples = () =>
  <div>
    <h1>Color</h1>
    <Example
      Element={Color} code={ColorSrc}
      caption="Color"
    >
      <p>
        The <code>presetColor</code> preset implements rules for creating
        styles that add color.  The default colors are gratefully borrowed
        from <a href="https://tailwindcss.com/docs/customizing-colors">Tailwind</a>.
      </p>
    </Example>
    <p>
      A rule to set the foreground color can start with <code>fg</code>,{' '}
      <code>fgcol</code>, <code>fgcolor</code>, <code>fgcolour</code>,{' '}
      <code>fg-col</code>, <code>fg-color</code>, <code>fg-colour</code>,{' '}
      <code>text</code>, <code>col</code>, <code>color</code> or{' '}
      <code>colour</code>.
    </p>
    <p>
      For a background color the prefix can be any of <code>bg</code>,{' '}
      <code>bgcol</code>, <code>bgcolor</code>, <code>bgcolour</code>,{' '}
      <code>bg-col</code>, <code>bg-color</code> or <code>bg-colour</code>{' '}
    </p>
    <p>
      For a border color the prefix can be any of <code>b</code>,{' '}
      <code>bor</code>, <code>borcol</code>, <code>borcolor</code>,{' '}
      <code>borcolour</code>, <code>bor-col</code>, <code>bor-color</code>,{' '}
      <code>bor-colour</code>, <code>border</code>, <code>border-col</code>,{' '}
      <code>border-color</code> or <code>border-colour</code>.
    </p>
    <p>
      It can then be followed by a hyphen and a color name{' '} from the
      <a href="">Tailwind palette</a>:{' '}
      <code>inherit</code>, <code>current</code>,{' '}
      <code>transparent</code>, <code>black</code>,{' '}
      <code>white</code>, <code>slate</code>,{' '}
      <code>gray</code>, <code>zinc</code>,{' '}
      <code>neutral</code>, <code>stone</code>,{' '}
      <code>red</code>, <code>orange</code>,{' '}
      <code>amber</code>, <code>yellow</code>,{' '}
      <code>lime</code>, <code>green</code>,{' '}
      <code>emerald</code>, <code>teal</code>,{' '}
      <code>cyan</code>, <code>sky</code>,{' '}
      <code>blue</code>, <code>indigo</code>,{' '}
      <code>violet</code>, <code>purple</code>,{' '}
      <code>fuchsia</code>, <code>pink</code>,{' '}
      <code>rose</code>.
    </p>
    <p>
      For all colors except <code>inherit</code>, <code>current</code>,{' '}
      <code>transparent</code>, <code>black</code> and <code>white</code>,
      an additional hyphen and shade number can be added:
      <code>50</code>, <code>100</code>, <code>200</code>, <code>300</code>,{' '}
      <code>400</code>, <code>500</code>, <code>600</code>, <code>700</code>,{' '}
      <code>800</code>, <code>900</code> or <code>950</code>.  If a shade
      isn&apos;t specified then it defaults to <code>500</code>.
    </p>
    <Expansions
      gloss={gloss}
      inputs={[
        'fg-inherit',
        'fg-current',
        'fg-black',
        'fg-white',
        'fg-transparent',
        'fg-red', 'fg-red-400', 'fg-red-600',
        'fgcol-red', 'fgcolor-red', 'fgcolour-red',
        'fg-col-red', 'fg-color-red', 'fg-colour-red',
        'color-red', 'colour-red', 'text-red',
        'bg-red', 'bg-red-400', 'bg-red-600',
        'bgcol-red', 'bgcolor-red', 'bgcolour-red',
        'bg-col-red', 'bg-color-red', 'bg-colour-red',
        'bd-red', 'bd-red-400', 'bd-red-600',
        'bdcol-red', 'bdcolor-red', 'bdcolour-red',
        'bd-col-red', 'bd-color-red', 'bd-colour-red',
        'bordercol-red', 'bordercolor-red', 'bordercolour-red',
        'border-col-red', 'border-color-red', 'border-colour-red',
        'border-red-400', 'border-red-600',
      ]}
    />
  </div>

export default ColorExamples

