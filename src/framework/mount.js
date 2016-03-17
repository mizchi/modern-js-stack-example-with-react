/* @flow */
const ReactDOM = require("react-dom");

export default function mount(vdom: any, dom: HTMLElement): any {
  return ReactDOM.render(vdom, dom);
}
