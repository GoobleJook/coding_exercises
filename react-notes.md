Webpack commands:

Build for debug mode:
webpack js/ClientApp.js public/bundle.js

Build for Production:
NODE_ENV=production webpack -p js/ClientApp.js public/bundle.js

Build for Testing:
NODE_ENV=test jest --no-cache (no-cache at least on first retry after error)


Babel commands (in development):
1. create .babelrc (a JSON file)
2. plugin and presets, presets are collections of plugins
2a. "modules": false for webpack so webpack bundles not babel, so uglify can strip out code (tree shaking)
2b. "loose": true -- makes it smaller because it leaves out crazy edge cases and uses only common polyfills
3. Only include plugins you need for production
4. webpack --module-bind='js=babel' js/ClientApp.js public/bundle.js
5. Write webpack.config.js in root
6. Can now just run webpack


To run webpack watch after this:
use either
webpack --watch 
or
npm run build -- --watch

can run 'npm run watch' after "watch" change to package.json

Can only have one top-level div (so you can wrap everything in a div, like with Bootstrap)

npm run lint 
npm run lint -s to 'get rid of all the npm output'
npm run lint -s -- --fix for autofix

can add <nav> under <HashRouter>, which will build a navbar on every page

{ /* This is a working comment */ }

don't use webpack-dev-server in production

npm run dev

The only thing that can modify the state of a component is the component itself

forceUpdate() is available as an option to setState(), usually only used for intgration with other services, such as D3. Use setState, always, if you want to stay happy.

filter() is a boolean method that keeps item in the array if true and kicks if false

Jest for testing uses Jasmine 2 as its engine and is much better than the original nightmare that Jest was.
Jest can snapshot test, which is when you give it how the file should look and Jest compares against that, kind of like a diff

Need to change .babelrc to accept components when in test environment

run with jest --no-cache if you change the .babelrc ENV
If you modify babel test environment

JEST USE CASES:
Write simple, non-robust tests when you have reached a stable version of a component. Test against this stable snapshot version.

JEST WARNINGS:
Jest will dig beneath top layer and this can cause problems. For example, Search.js errors might show up on a test of ShowCard.js because Search.js is UNDERNEATH ShowCard.js
  Solution: Enzyme should be used for react.js testing
