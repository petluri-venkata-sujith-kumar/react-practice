import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1 style={{ color: "blue" }}>Sorry things went wrong...</h1>
          <p>we will come back soon.....</p>
        </>
      );
    } else {
      return this.props.children;
    }
  }
}
