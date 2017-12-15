import React, { Component } from 'react';

export default class ErrorDisplayer extends Component {
  render() {
    return (
      <span className="title is-4 has-text-danger">
        {this.props.message}
      </span>
    );
  }
}
