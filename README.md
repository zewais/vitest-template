# Vitest userEvent

For interactions in vitest we will replace fireEvent with userEvent as it simulates full user interactions.

Note: userEvent always returns a promise, so using asynchronous functions (`async` and `await`) is essential for the interactions to work.

## userEvent install

```sh
npm intall --save-dev @testing-library/user-event
```

## example setup in a test file

```js
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

await user.keyboard("[ShiftLeft>]"); // Press Shift (without releasing it)
await user.click(element); // Perform a click with `shiftKey: true`
```

[userEvent refernece](https://testing-library.com/docs/user-event/intro)

We will also use react-bootstrap library in this example

## react-bootstrap install

```sh
npm install react-bootstrap bootstrap
```

## react-bootstrap CSS setup

```js
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
```

[react-bootstrap reference](https://react-bootstrap.netlify.app/docs/getting-started/introduction)
