/* @flow */
import {Component, PropTypes} from "react";
import {EventEmitter} from "events";

export default class Container extends Component {
  emitter: EventEmitter;

  constructor(...args: any[]) {
    super(...args);
    this.emitter = new EventEmitter;
  }

  componentWillUnmount() {
    this.emitter.removeAllListeners();
  }

  getChildContext(): any {
    return {
      dispatch: this.emitter.emit.bind(this.emitter),
      rootProps: this.props
    };
  }
}

Container.childContextTypes = {
  dispatch: PropTypes.any,
  rootProps: PropTypes.any
};
