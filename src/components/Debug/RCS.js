import React, { Component } from 'react'

export default class RCS extends Component {
  display = () => {
    console.log("React state : ", this.props.state);
  }

  render() {
    return (
      <button className="button is-info is-outlined is-centered"
        onClick={this.display}>
        Get react state
      </button>
    );
  };
}
