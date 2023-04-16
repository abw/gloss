import React       from 'react'
import CodeBlock   from '../site/CodeBlock.jsx'
import PresetSrc   from '../examples/ReactPreset.jsx?raw'
import UseGloss    from '../examples/UseGloss.jsx'
import UseGlossSrc from '../examples/UseGloss.jsx?raw'
import Example, { prepareCode } from '../site/Example.jsx'

const GettingStarted = () =>
  <div>
    <h1>Getting Started</h1>
    <p>
      Add the <code className="code">@abw/gloss</code> module to
      your project using your favourite package manager.
    </p>
    <CodeBlock language="bash">
      {`## using npm
$ npm add @abw/gloss

## using yarn
$ yarn add @abw/gloss

## using pnpm
$ pnpm add @abw/gloss
`}
    </CodeBlock>
    <p>
      Create your own gloss configuration module.
      The <code>presetAll</code> preset is a good place to start.
      As the name suggests, it includes all of the others presets.
      You can also define your own rules that apply other rules, either
      from the presets or that you define yourself.
    </p>
    <p>
      If you&apos;re using React then you should use the
      <code>reactGlosser</code> function as shown here.  This automatically
      converts CSS styles to their camelCase equivalent (e.g.{' '}
      <code>padding-left</code> is converted
      to <code>paddingLeft</code>) and returns any CSS <code>class</code>
      attribute as <code>className</code>.
    </p>
    <p>
      If you want the unmodified CSS properties then import and use{' '}
      <code>glosser</code> instead of <code>reactGlosser</code>.
    </p>
    <CodeBlock
      code={prepareCode(PresetSrc)}
      language="jsx" caption="Gloss.js"
    />
    <p>
      You can then import <code>gloss</code> from your module and use it
      to add the <code>className</code> and <code>style</code> attributes
      to any component.
    </p>
    <Example
      Element={UseGloss} code={UseGlossSrc}
      caption="gloss"
    />
  </div>

export default GettingStarted