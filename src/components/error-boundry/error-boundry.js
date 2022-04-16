import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';


export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  /* Вызовется тогда когда в одном из компонентов ниже по иерархии возникла ошибка */
  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return this.props.children;
  }
}