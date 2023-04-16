import React    from 'react'
import Link from '../../site/Link.jsx'

const Home = () =>
  <div>
    <h1>Presets</h1>
    <p>
      Presets all you to easily add pre-defined rules for generating element
      styles.
    </p>
    <ul className="largish menu">
      <li>
        <Link to="all" text="All"/> - all the presets
      </li>
      <li>
        <Link to="border" text="Border"/> - presets for adding borders
      </li>
      <li>
        <Link to="color" text="Color"/> - presets for adding colors based on the Tailwind palette
      </li>
      <li>
        <Link to="margin" text="Margin"/> - presets for adding margins
      </li>
      <li>
        <Link to="padding" text="Padding"/> - presets for adding padding
      </li>
      <li>
        <Link to="radius" text="Radius"/> - presets for setting the border radius
      </li>
      <li>
        <Link to="shadow" text="Shadow"/> - presets for adding box shadows
      </li>
      <li>
        <Link to="size" text="Size"/> - presets for setting font size and line height
      </li>
    </ul>
  </div>

export default Home