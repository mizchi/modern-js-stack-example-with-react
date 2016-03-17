/* @flow */

function foo(x) {
  return x * 10;
}
// this code causes type error
foo('Hello, world!');
