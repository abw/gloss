import presetBorder  from './border.js'
import presetColor   from './color.js'
import presetMargin  from './margin.js'
import presetPadding from './padding.js'
import presetRadius  from './radius.js'
import presetShadow  from './shadow.js'
import presetSize    from './size.js'

export function presetAll( options={ } ) {
  return [
    presetBorder(options),
    presetColor(options),
    presetMargin(options),
    presetPadding(options),
    presetRadius(options),
    presetShadow(options),
    presetSize(options)
  ]
}

export default presetAll