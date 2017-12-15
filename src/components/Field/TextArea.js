import React, { Component } from 'react'

export default class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.hasFetched && nextProps.hasFetched) {
      this.setState({
        val: nextProps.obj[this.props.objName]
      }, () => {
        this.props.onChange(this.state.val);
      })
    }
  }

  onChange = (event) => {
    let newVal = event.target.value;
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
          <textarea className="textarea"
          placeholder={this.props.placeholder ? this.props.placeholder : this.props.name}
          value = {this.state.val}
          onChange={this.onChange} autoFocus={this.props.autoFocus}>
          </textarea>
        </div>
      </div>
    );
  };
}
