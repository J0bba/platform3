import React, { Component } from 'react';
import { browserHistory } from 'react-router'

export default class Menu extends Component {
  changeTab(name) {
    this.props.changeTab();
    browserHistory.push('/' + name);
  }

  render() {
    return (
      <div className="tabs is-centered bg-white">
        <ul>
          <li className={ this.props.active === "statements" ? "is-active" : "" }>
            <a onClick={ () => this.changeTab("statements") }>Statements</a>
          </li>
          <li className={ this.props.active === "activities" ? "is-active" : "" }>
            <a onClick={ () => this.changeTab("activities") }>Activities</a>
          </li>
          <li className={ this.props.active === "admin" ? "is-active" : "" }>
            <a onClick={ () => this.changeTab("admin") }>Admin panel</a>
          </li>
        </ul>
      </div>
    );
  }
}
