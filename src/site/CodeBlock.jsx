import React from 'react'
import Syntax from './Syntax.jsx'

export const CodeBlock = ({code, children, language='jsx', caption}) =>
  <div className="codeblock">
    {Boolean(caption) && <h4 className="caption">{caption}</h4>}
    <Syntax language={language}>
      {code||children}
    </Syntax>
  </div>

export default CodeBlock
