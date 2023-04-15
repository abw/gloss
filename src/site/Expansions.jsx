import React from 'react'
import Syntax from './Syntax.jsx'

const Expansions = ({inputs, gloss}) =>
  <>
    <h4>Examples</h4>
    <table className="wide expansions">
      <thead>
        <tr>
          <th>Specification</th>
          <th>Styles Applied</th>
        </tr>
      </thead>
      <tbody>
        { inputs.map(
          input => <Expansion input={input} key={input} gloss={gloss}/>
        )}
      </tbody>
    </table>
  </>

const Expansion = ({input, gloss}) => {
  const output = JSON.stringify(gloss(input).style)
  return (
    <tr valign="middle">
      <td><Syntax language="css" showLineNumbers={false}>{input}</Syntax></td>
      <td><Syntax language="json" showLineNumbers={false}>{output}</Syntax></td>
    </tr>
  )
}

export default Expansions