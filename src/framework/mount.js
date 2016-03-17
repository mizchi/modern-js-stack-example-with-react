/* @flow */
// import InfernoDOM from "inferno-dom";
const InfernoDOM = require("inferno-dom");

export default function mount(vdom: any, dom: HTMLElement): any {
  return InfernoDOM.render(vdom, dom);
}
