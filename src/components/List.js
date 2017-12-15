import React, { Component } from 'react';

import ListRow from './ListRow'

export default class List extends Component {
  render() {
    var list_rows = [];
    this.props.list.map((el, i) => {
      var row = <ListRow id={el['id']} el={el}
      edit_address={this.props.edit_address} key={i}
      exclude={this.props.exclude}/>;
      list_rows.push(row);
      return row;
    })

    return (
      <table className="table has-text-centered">
        <thead>
          <tr>
            {this.props.titles.map(title =>
              <th key={title}>{title}</th>
            )}
            <th></th>
          </tr>
        </thead>
        <tbody>
          { list_rows }
        </tbody>
      </table>
    );
  }
}
