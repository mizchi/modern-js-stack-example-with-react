/* @flow */
import Container from "src/framework/container";
import App from "../components/app";
export default class RootContainer extends Container {
  render() {
    return <App/>;
  }
}
