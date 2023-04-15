import React from 'react'
import Link from './Link.jsx'
import { date, version } from './Utils.jsx'

const Sidebar = () =>
  <>
    <div className="menu">
      <h4>react-gloss</h4>
      <ul className="menu">
        <li><Link to="/" end text="Home"/></li>
        <li><Link to="getting-started" end text="Getting Started"/></li>
        <li><Link to="demo" end text="Demo"/></li>
      </ul>
      <h4>Examples</h4>
      <ul className="menu">
        <li><Link to="/examples/padding" text="Padding"/></li>
        <li><Link to="/examples/margin" text="Margin"/></li>
        <li><Link to="/examples/color"  text="Color"/></li>
        <li><Link to="/examples/buttons" text="Buttons"/></li>
      </ul>
    </div>
    <footer>
      <div>
        Version {version}
      </div>
      <div>
        {date}
      </div>
    </footer>
  </>


export default Sidebar