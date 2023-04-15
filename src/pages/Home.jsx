import React      from 'react'
import Link       from '../site/Link.jsx'
import { imgUrl } from '../site/Utils.jsx'

const Home = () =>
  <div className="">
    <h1>@abw/react-gloss</h1>
    <a href="https://github.com/abw/react-gloss" className="github">
      <img
        src="https://github.githubassets.com/favicons/favicon.svg"
        alt="Github repository"
      />
    </a>
    <div className="pic-side">
      <img src={imgUrl('gloss.svg')}/>
      <div className="blurb">
        <p className="intro">
          <code className="code">react-gloss</code> is a simple React library
          for adding rule-based styling to components.
        </p>
        <p className="subintro">
          It can be used to automatically generate utility classes in the style
          of Tailwind et al.  It is small, fast and flexible and only generates
          the styles for classes that you use.
        </p>
      </div>
    </div>
    <div>
      <ul className="large menu">
        <li>
          <Link to="getting-started" text="Getting Started"/> - adding the module to your project.
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

