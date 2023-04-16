import React    from 'react'
import Buttons  from './Buttons/index.jsx'
import { Routes, Route } from 'react-router-dom'

const Examples = () =>
  <Routes>
    <Route path="buttons"   element={<Buttons/>} />
  </Routes>

export default Examples