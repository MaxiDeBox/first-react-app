import React from "react";
import {Component} from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo
    });
  }

  render () {
    if(this.state.hasError) {
      return this.props.errorHandler(
        this.state.error,
        this.state.errorInfo
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
