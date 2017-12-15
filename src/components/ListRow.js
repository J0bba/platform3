import React, { Component } from 'react';
import { browserHistory } from 'react-router'

export default class ListRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id
    }

    this.goToEdit = this.goToEdit.bind(this);
  }

  goToEdit() {
    browserHistory.push('/' + this.props.edit_address + '/' + this.state.id);
  }

  render() {
    return <tr>
          { Object.keys(this.props.el).map(function(key, i) {
            if (key === 'id' || (this.props.exclude && this.props.exclude.indexOf(key) > -1)) {
              return null
            }
            else {
              return <td key={i}> { this.props.el[key].toString() } </td> }
            }, this)
          }
          <td>
            <button className="button"
              onClick={ this.goToEdit }>
              Edit
            </button>
          </td>
      </tr>
  }
}
