/* @flow */

export function foo(x: number): number {
  return x * 10;
}
// this code causes type error
// foo('Hello, world!');

console.log("hello world")
