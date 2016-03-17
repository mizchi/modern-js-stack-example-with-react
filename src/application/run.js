/* @flow */
import "src/framework/setup";
import mount from "src/framework/mount";
import RootContainer from "src/ui/containers/root-container";
window.addEventListener("DOMContentLoaded", () => {
  let el = document.querySelector(".root-container");
  mount(<RootContainer/>, el);
});
