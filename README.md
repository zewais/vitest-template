# Global setup for Vitest and React Test Library

This is a comprehensive guide to set up your project to test React components using Vitest and React Test Library.

## Install Vitest and React Test Library

```sh
npm install -D vitest @vitest/ui eslint-plugin-vitest
npm install -D jsdom @testing-library/jest-dom @testing-library/react
npm install -D eslint-plugin-jest-dom eslint-plugin-testing-library
```

## Add test script to package.json `test` object

```json
    "test": "vitest --watch"
```

## Add a test setup file

To make [jest-dom matchers](https://github.com/testing-library/jest-dom#custom-matchers) available in all test files:

1. create new file _src/setupTests.js_
2. add the below line of code to the file

```js
import "@testing-library/jest-dom";
```

## Add Vitest and Testing Library plugins to ESlint

In _.eslintrc.cjs_:

1. Add the following to the `extends` array:

```js
    "plugin:testing-library/react",
    "plugin:vitest/recommended",
```

2. This step aviods linting errors when using `test` and `expect` Vitest globals without importing them first.

At the top, require the Vitest plugin:

```js
const vitest = require("eslint-plugin-vitest");
```

Then add this property / value at the top level `module.exports` object

```js
    globals: {
        ...vitest.environments.env.globals,
    }
```

## Update a couple of ESlint rules

Add the following to the `rules` object in _.eslintrc.cjs_

```js
    "no-unused-vars": "warn", //to change from throwing an error to only warn
    "vitest/expect-expect": "off", //to remove error detection while writing tests
    "react/prop-types": "off". //to remove errors for prop types enforcement
```

## Update Vite config file to work with tests

Update _vite.config.js_ based on the [Vitest Testing Library example](https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts). Add this property / value to the `defineConfig` argument:

```js
  test: {
    globals: true,
    environment: "jsdom",
    // this points to the setup file created earlier
    setupFiles: "./src/setup.js",
    // to test CSS, you need to add the line below and
    // you might want to disable the `css: true` line, if you will not test CSS
    // as parsing CSS is slow.
    css: true,
  },
```

## Command to run tests in watch mode

```sh
npm test
```

## Reference

- [creating a Vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Vitest Testing Library example](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
- [Vitest ESLint plugin](https://www.npmjs.com/package/eslint-plugin-vitest)
