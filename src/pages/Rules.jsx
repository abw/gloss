import React       from 'react'
import CodeBlock   from '../site/CodeBlock.jsx'
import RulesObject from '../examples/RulesObject.jsx?raw'
import UseRulesObject from '../examples/UseRulesObject.jsx'
import UseRulesObjectSrc from '../examples/UseRulesObject.jsx?raw'
import RulesRegex from '../examples/RulesRegex.jsx?raw'
import UseRulesRegex from '../examples/UseRulesRegex.jsx'
import UseRulesRegexSrc from '../examples/UseRulesRegex.jsx?raw'
import UseButtons from '../examples/UseButtons.jsx'
import UseButtonsSrc from '../examples/UseButtons.jsx?raw'
// import ButtonGlosser from '../examples/ButtonGlosser.jsx'
import ButtonGlosserSrc from '../examples/ButtonGlosser.jsx?raw'
import Example, { prepareCode } from '../site/Example.jsx'
import Link from '../site/Link.jsx'

const Rules = () =>
  <div>
    <h1>Defining Rules</h1>
    <p>
      Gloss allows you to define rules that automatically apply styles or
      CSS class names to your elements.  You can use one of the{' '}
      <Link to="/presets" text="presets"/> available but you&apos;ll probably
      also want to define some rules of your own.
    </p>
    <p>
      If you&apos;re using React (as we are in these example) then you should
      use the <code>reactGlosser</code> function.  This is just a thin wrapper
      around the <code>glosser</code> function which keeps React happy by
      converting <code>class</code> to <code>className</code> and changing style
      properties into their camelCase equivalents (e.g. <code>margin-left</code>{' '}
      becomes <code>marginLeft</code>).  If you&apos;re not using React then you can
      use the <code>glosser</code> function instead or write your own wrapper.
    </p>

    <h2>Rules Object</h2>
    <p>
      The example below shows the simple case where you define rules using
      a plain old Javascript object.  Each rule name (<code>example</code> and{' '}
      <code>example2</code> in this case) is mapped to an object which can
      contain a <code>class</code> which should be added to an element and
      a set of <code>style</code> properties which should be applied.  Both
      are optional.
    </p>
    <p>
      A rule can also include an <code>apply</code> property which will
      apply the other rule or rules specified.
    </p>
    <CodeBlock
      code={prepareCode(RulesObject)}
      caption="Gloss.js"
    />
    <p>
      Import the <code>gloss</code> function generated by the above and
      then use it in your components.  You can call the function as{' '}
      <code>gloss(&apos;example&apos;)</code> or using the short-hand syntax
      with a tagged template literal: <code>gloss`example`</code>.
      The argument is the rule or rules that you want to match.  Multiple
      rules can be separated by spaces, just like using CSS classes, e.g.{' '}
      <code>gloss`rule1 rule2`</code>
    </p>
    <p>
      The function returns an object which may contain a <code>class</code>{' '}
      and <code>styles</code>.  In the case of the <code>reactGlosser</code>{' '}
      component, the <code>class</code> will be translated to <code>className</code>{' '}
      and each of the style names will be converted to camelCase to keep
      React happy.
    </p>
    <p>
      You should use the spread operator <code>...</code> to expand this
      object into separate properties for your component.
    </p>
    <Example
      Element={UseRulesObject} code={UseRulesObjectSrc}
    />
    <p>
      The first <code>div</code> has the <code>example</code> rule applied
      which sets the border, padding and margin.  Although you can&apos;t see
      it here, it&apos;s also had the <code>my-example-class</code> CSS class
      added which you can then target via CSS rules in the usual way.  I&apos;ve
      defined a CSS rule that sets the background color to <code>#eee</code> for{' '}
      <code>.my-example-class</code> elements.
    </p>
    <p>
      The second <code>div</code> uses the <code>example2</code> rule which
      applies the <code>example</code> rule and then sets the
      border color to green.
    </p>

    <h2>Regular Expression Rules</h2>
    <p>
      A more flexible approach is to use regular expressions to match rules
      This was inspired by <a href="https://unocss.dev/guide/">UnoCSS</a>{' '}
      which uses the same approach.
    </p>
    <p>
      Here the rule should be specified as an array.  The first element is
      a regular expression.  The second is a function which will be passed the
      result of matching a rule, including any captured parts (inside
      parentheses).  It should return an object containing <code>class</code>{' '}
      and/or <code>style</code> definitions.
    </p>
    <CodeBlock
      code={prepareCode(RulesRegex)}
      caption="Gloss.js"
    />
    <p>
      In this example we&apos;re matching a rule that starts with
      <code>color-</code> and capturing the word that follows it.
      That word is then used to define the <code>color</code> style.
    </p>
    <Example
      Element={UseRulesRegex} code={UseRulesRegexSrc}
    />

    <h2>Combining Rules</h2>
    <p>
      You can define any number of rules.  You can also combine them with
      the rules generated by the presets.
    </p>
    <p>
      In this example we load all the presets via <code>presetAll()</code>,
      define an additional rule to add outlines to elements, and then define
      a set of rules for styling buttons.
    </p>
    <CodeBlock
      code={prepareCode(ButtonGlosserSrc)}
      caption="Gloss.js"
    />
    <p>
      This also demonstrates the short-hand form for rules.  If a rule
      is defined as a string (e.g. as for <code>button</code>,{' '}
      <code>button-red</code>, etc) then it is assumed to be short-hand
      for an object with an <code>apply</code> property.  e.g.{' '}
      <code>button: &apos;radius-1&apos;</code> is treated the same as{' '}
      <code>button: {'{'} apply: &apos;radius-1&apos; {'}'}</code>
    </p>
    <p>
      Here&apos;s how we can use these rules:
    </p>
    <Example
      Element={UseButtons} code={UseButtonsSrc}
    />

  </div>

export default Rules