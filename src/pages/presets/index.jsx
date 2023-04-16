import React    from 'react'
import All      from './All/index.jsx'
import Border   from './Border/index.jsx'
import Color    from './Color/index.jsx'
import Margin   from './Margin/index.jsx'
import Padding  from './Padding/index.jsx'
import Radius   from './Radius/index.jsx'
import Shadow   from './Shadow/index.jsx'
import Size     from './Size/index.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'

const Presets = () =>
  <div>
    <Routes>
      <Route path="" end      element={<Home/>} />
      <Route path="all"       element={<All/>} />
      <Route path="border"    element={<Border/>} />
      <Route path="color"     element={<Color/>} />
      <Route path="margin"    element={<Margin/>} />
      <Route path="padding"   element={<Padding/>} />
      <Route path="radius"    element={<Radius/>} />
      <Route path="shadow"    element={<Shadow/>} />
      <Route path="size"      element={<Size/>} />
    </Routes>
  </div>

export default Presets