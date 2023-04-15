import React from 'react'
import CodeBlock from './CodeBlock.jsx'

export const Example = ({
  Element, code, children='', className='', caption
}) => {
  const core = code
    .replace(/^[^]*?{?\/\*\s*START\s*\*\/}?\n/, '')  // remove everything up to {/* START */}
    .replace(/[\n\s]*{?\/\*\s*END\s*\*\/}?[^]*/, '') // and everything from {/* END */} onwards
    .replaceAll(/\/\/\s*PRETEND:\s/g, '')           // and the // PRETEND: prefix

  return <div className={`example ${className}`}>
    {children}
    <div className="mar-t-2">
      <CodeBlock caption={caption}>{core}</CodeBlock>
    </div>
    { Element
      ? <div className="mar-t-2">
          <Element/>
        </div>
      : null
    }
  </div>
}

export default Example
