import React      from 'react'
import Link       from '../site/Link.jsx'
import { imgUrl } from '../site/Utils.jsx'
import gloss      from '../site/Gloss.js'

const Home = () =>
  <div className="">
    <h1>@abw/gloss</h1>
    <a href="https://github.com/abw/gloss" className="github">
      <img
        src="https://github.githubassets.com/favicons/favicon.svg"
        alt="Github repository"
      />
    </a>
    <div className="pic-side">
      <img src={imgUrl('gloss.svg')}/>
      <div className="blurb">
        <p className="intro">
          <code className="code">gloss</code> is a simple Javascript library
          for adding rule-based styling to web components.
        </p>
        <p className="subintro">
          It can be used to automatically generate utility classes in the style
          of Tailwind et al.  It is small, fast and flexible and only generates
          the styles for classes that you use.  It was inspired by{' '}
          <a href="https://unocss.dev">UnoCSS</a>.
        </p>
      </div>
    </div>
    <div>
      <div {...gloss`warning`}>
        <h3 {...gloss`warning-head`}>Warning!</h3>
        <p {...gloss`largish`}>
          This is a proof of concept and a work in progress.  It should
          be considered unstable, unreliable and likely to change at any time.
          Use it at your own risk!
        </p>
      </div>
      <ul className="large menu">
        <li>
          <Link to="getting-started" text="Getting Started"/> - adding the module to your project.
        </li>
        <li>
          <Link to="rules" text="Defining Rules"/> - defining rules to apply styles.
        </li>
        <li>
          <Link to="discussion" text="Discussion"/> - is this any good?  Should you use it?  Will I use it?
        </li>
      </ul>
    </div>
    <div className="badger">
      <img src={imgUrl('badger.svg')} alt="badger"/>
      <div className="caption">
        Built by Badgers
      </div>
    </div>
  </div>

export default Home

