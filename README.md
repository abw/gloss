# gloss

Gloss is a simple Javascript library for adding rule-based styling to web
components.

It can be used to automatically generate utility classes in the style of
Tailwind et al. It is small, fast and flexible and only generates the styles
for classes that you use. It was inspired by [UnoCSS](https://unocss.dev/).

## Warning!

This is a proof of concept and a work in progress. It should be considered
unstable, unreliable and likely to change at any time. Use it at your own
risk!

## Getting Started

Add the `@abw/gloss` module to your project using your favourite
package manager.

```bash
## using npm
$ npm add @abw/gloss

## using yarn
$ yarn add @abw/gloss

## using pnpm
$ pnpm add @abw/gloss
```

## Documentation

Visit the [documentation](https://abw.github.io/gloss/) web site
for documentation and examples.

## Notes for Maintainers

Check out the repository.

```bash
$ git clone https://github.com/abw/gloss.git
$ cd gloss
```

Install the dependencies.

```bash
$ pnpm install
```

To run the development server.

```bash
$ pnpm dev
```

To run the tests.

```bash
$ pnpm test
```

To build for production.

```bash
$ pnpm build
```

To build the documentation.

```bash
$ pnpm build:docs
```

To preview the documentation.

```bash
$ pnpm preview
```

Check source code for formatting errors.

```bash
$ pnpm lint
```


## Project Structure

The main project code is in the `lib` directory.  The `index.jsx` is the
main entry point.

Running `pnpm build` creates a production build in the `dist`
directory.

The `src` directory contains the web site for development, testing and
documentation.  The `index.html` is the main entry point.

Running `pnpm dev` runs a development web server for the site.

Running `pnpm build:docs` builds the site and saves the bundled
output in the `docs` directory.  Any additional resources in the `public`
directory will be included in there.

The `styles` directory contains SASS stylesheets used by the web site.
The `main.scss` file is the main stylesheet which is imported into
`src/main.jsx`.

The `test` directory contains test scripts which will be run by
`pnpm test`.  The `test/setup.js` file is a special setup file.
Any files in `test/lib` are assumed to be components used by tests and
are not test scripts in their own right.  They are ignored by the test
runner.
