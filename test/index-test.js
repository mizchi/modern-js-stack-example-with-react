/* @flow */
import {foo} from "../src/index"

it ("multiply 10", () => {
  assert(foo(10) === 100);
})
