import React from 'react'

const Discussion = () =>
  <div>
    <h1>Discussion</h1>
    <p className="intro">
      As the home page notes, this is a proof of concept and a work in
      progress.  I&apos;m not convinced that this is a good idea at all.
      I wrote this code to allow me to play with the idea and see how well it
      works (or doesn&apos;t).
    </p>
    <p className="intro">
      If you haven&apos;t already seen it then I suggest you
      go and look at <a href="https://unocss.dev">UnoCSS</a> first.
    </p>
    <h2>CSS Utility Classes</h2>
    <p>
      I&apos;m a big fan of CSS utility classes.  They&apos;ve existed pretty
      much since CSS was invented (anyone remember <code>.clearfix</code>?)
      and have always been part of my CSS toolkit.  In particular, I don&apos;t
      think I&apos;ve built a web site in the past 20 or so years that hasn&apos;t
      include my own CSS utilities to add margins and padding to elements
      (e.g. <code>mar-t-2</code>, <code>pad-4</code>, etc).
    </p>
    <h3>Tailwind CSS</h3>
    <p>
      Then <a href="https://tailwindcss.com/">TailwindCSS</a> came along and
      turned it up to eleven.  It seems to polarise people - they either
      love it or hate it.  I personally think it&apos;s a great way to
      prototype a site, but I&apos;m not convinced that it makes for easy
      maintenance in the long run.  I really need to spend some more time
      using it in a real project before I can pass judgement.
    </p>
    <h3>UnoCSS</h3>
    <p>
      Then recently I came across <a href="https://unocss.dev/">UnoCSS</a>{' '}
      which turns the Tailwind approach on it&apos;s head.  Instead of
      pre-defining a bajillion utility classes and using PostCSS to filter
      out the ones that aren&apos;t being used, it defines a set of rules
      for generating CSS classes on demand.  It comes with integrations
      for <a href="https://unocss.dev/integrations/vite">Vite</a>,{' '}
      <a href="https://unocss.dev/integrations/postcss">PostCSS</a>, and
      various other build systems, although some of them are still marked
      as being in the experimental stage.
    </p>
    <h3>CSS in JS</h3>
    <p>
      And then we have the CSS in JS approach.  On this I&apos;m quite
      certain - it&apos;s not for me.  I can see the attraction for some
      people, particularly those who live in Javascript land and maybe
      don&apos;t know CSS as well.  But it seems to me like it&apos;s
      throwing away all the benefits of using CSS (cascading, media
      queries, CSS variable, detecting user preferences, and so on).
      Furthermore it violates the separation of concerns between code and
      design that, as a developer working with clients and designers who
      frequently change their minds, is an important principle.  And
      don&apos;t get me started on the need to quote CSS fragments or
      convert them to camelCase to keep the Javascript/JSX parser happy.
    </p>
    <h3>Gloss</h3>
    <p>
      So I was thinking about all of this and wondered if we could take
      the rule-based approach of UnoCSS to generate styles on demand and
      integrate it directly into the source code.  Effectively UnoCSS in JS.
      And so gloss was born.  Hewn from the living rock of Stonehenge.
    </p>
    <p>
      Does it work?  Well, kind of.  I think it&apos;s pretty neat that
      you can define a few simple rules (if you ignore the complexity of
      some of the regular expression) that can generate an unlimited number
      of styles.  It&apos;s nice being able to use a <code>mar-t-11</code>{' '}
      utility class, for example, without having to go and modify your SASS
      file because it previously only went up to <code>mar-t-10</code>.
      It&apos;s one <strike>louder</strike> marginer.  And if one day you happen to need{' '}
      <code>mar-t-24</code> then you can just use it without having to
      worry about the overhead of generating CSS classes for all the
      other margin sizes between 11 and 24 that you&apos;ll probably never
      use.
    </p>
    <p>
      So on this front I&apos;m convinced.  Generating styles for CSS
      classes on demand is the way forward.  But after playing with gloss
      for a few days, I&apos;m not convinced that doing it in Javascript is
      the right way.  This may be my bias against CSS in JS that&apos;s
      influencing me but I can&apos;t overlook the limitations.
    </p>
    <p>
      For example, you can&apos;t generate classes for hover, focus or
      other states.  You can&apos;t use media queries without needing hacks
      to detect changes in the window size.  You can&apos;t use the modern
      CSS features to detect user preferences like{' '}
      <code>prefers-color-scheme</code>, <code>prefers-reduced-motion</code>,
      and so on.  As far as I&apos;m concerned these are all inherent
      limitations of CSS in JS.  There are others, too. Sam Magura, one of
      the maintainers of{' '}
      <a href="https://emotion.sh/">Emotion</a>, one of the popular
      CSS in JS libraries, explains{' '}
      <a href="https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b">
      why they stopped using it
      </a> and talks about some of the other problems.
    </p>
    <p>
      So I&apos;m thinking that what I&apos;ve built is a different (not
      necessarily better or worse) way to do CSS in JS.  But as someone who
      doesn&apos;t buy into it, I&apos;m struggling to recognise its
      worth.
    </p>
    <p>
      The only benefit over UnoCSS that I can see is that it doesn&apos;t
      require any integration into your build system.  It plugs
      straight into React or any other component system.  Although I
      use React almost exclusively these days, and have so far only
      implemented the code for React, the only part that is specific to React
      is the wrapper that converts the generated styles to camelCase.  It
      should be trivially easy to plug it into any other framework or even
      vanilla JS.
    </p>
  </div>

export default Discussion