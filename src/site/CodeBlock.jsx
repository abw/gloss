import React from 'react'
import Syntax from './Syntax.jsx'

export const CodeBlock = ({children, language='jsx'}) =>
  <div className="codeblock">
    <Syntax lanuage={language}>
      {children}
    </Syntax>
  </div>

export default CodeBlock
