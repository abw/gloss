import React    from 'react'
import Padding  from './Padding/index.jsx'
import Margin   from './Margin/index.jsx'
import Color    from './Color/index.jsx'
import Buttons  from './Buttons/index.jsx'
import { Routes, Route } from 'react-router-dom'

const Examples = () =>
  <Routes>
    <Route path="padding"   element={<Padding/>} />
    <Route path="margin"    element={<Margin/>} />
    <Route path="color"     element={<Color/>} />
    <Route path="buttons"   element={<Buttons/>} />
  </Routes>

export default Examples