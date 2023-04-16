import { reactGlosser } from '../../lib/index.js'

{/* START */}
// PRETEND: import { reactGlosser } from '@abw/gloss'

const { gloss } = reactGlosser(
  {
    example: {
      class: 'my-example-class',
      style: {
        border: '2px solid red',
        padding: '1rem',
        'margin-bottom': '1rem'
      }
    },
    example2: {
      apply: 'example',
      style: {
        'border-color': 'green',
      }
    }
  }
)

export default gloss

