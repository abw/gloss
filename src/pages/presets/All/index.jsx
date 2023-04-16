import React from 'react'
import AllExample from './examples/All.jsx'
import AllSrc from './examples/All.jsx?raw'
import Example from '../../../site/Example.jsx'

const All = () =>
  <div>
    <h1>All</h1>
    <Example
      Element={AllExample} code={AllSrc}
      caption="All"
    >
      <p>
        The <code>presetAll</code> preset includes all of the other presets.
        It&apos;s a good place to start.
      </p>
    </Example>
  </div>

export default All