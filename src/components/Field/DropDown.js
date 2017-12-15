import React, { Component } from 'react'
import Select from 'react-select';

export default class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: props.options[0].value
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.hasFetched && nextProps.hasFetched) {
      this.setState({
        val: nextProps.obj[this.props.objName].toString()
      }, () => {
        this.props.onChange(this.state.val);
      })
    }
  }

  onChange = (newVal) => {
    this.setState({
      val: newVal
    });
    this.props.onChange(newVal);
  }

  render() {
    return (
      <div className="field">
        <div className="control">
          <label className="label">{this.props.name}</label>
          <Select
            value={this.state.val}
            placeholder={this.props.name}
            options={this.props.options}
            onChange={this.onChange}
            clearable={false}
            searchable={false}
          />
        </div>
      </div>
    );
  };
}
