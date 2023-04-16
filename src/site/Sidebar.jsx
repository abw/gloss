import React from 'react'
import Link from './Link.jsx'
import { date, version } from './Utils.jsx'

const Sidebar = () =>
  <>
    <div className="menu">
      <h4>gloss</h4>
      <ul className="menu">
        <li><Link to="/" end            text="Home"/></li>
        <li><Link to="getting-started"  text="Getting Started"/></li>
        <li><Link to="rules"            text="Defining Rules"/></li>
        <li><Link to="discussion"       text="Discussion"/></li>
      </ul>

      <Link to="/presets">
        <h4>Presets</h4>
      </Link>
      <ul className="menu">
        <li><Link to="/presets/all"     text="All"/></li>
        <li><Link to="/presets/border"  text="Border"/></li>
        <li><Link to="/presets/color"   text="Color"/></li>
        <li><Link to="/presets/margin"  text="Margin"/></li>
        <li><Link to="/presets/padding" text="Padding"/></li>
        <li><Link to="/presets/radius"  text="Radius"/></li>
        <li><Link to="/presets/shadow"  text="Shadow"/></li>
        <li><Link to="/presets/size"    text="Size"/></li>
      </ul>

      <h4>Examples</h4>
      <ul className="menu">
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