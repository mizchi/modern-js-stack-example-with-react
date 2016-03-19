/* @flow */
import {Component, PropTypes} from "react";
export default class ComponentBase extends Component {
  dispatch(...args: any[]): boolean {
    return this.context.dispatch(...args);
  }
}

ComponentBase.contextTypes = {
  dispatch: PropTypes.any,
  rootProps: PropTypes.any
};
