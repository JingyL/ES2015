### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
AJAX

- What is a Promise?
A promise is one-time guarantee of future value.

- What are the differences between an async function and a regular function?
async functions always return promises.

- What is the difference between Node.js and Express.js?
Express. js is a framework based on Node. js

- What is the error-first callback pattern?
Node.js callbacks usually conform to an “error-first” pattern.The callback function’s first parameter should be listed as error.

- What is middleware?
It is code that runs in the middle of the request / response cycle

- What does the `next` function do?
When we don't want to handle the route then something else can pick it up instead.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```


