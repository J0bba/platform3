import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default function (ComposedComponent) {
  return class Authentication extends Component {
    componentWillMount() {
      // if (localStorage.getItem('jwt') === null) {
      //     browserHistory.push('/');
      // }
    }

    componentWillUpdate(nextProps) {
      // if (localStorage.getItem('jwt') === null) {
      //     browserHistory.push('/');
      // }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
}
