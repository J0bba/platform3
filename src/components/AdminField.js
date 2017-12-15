import React, { Component } from 'react'

import InputField from '../components/Field/InputField'

export default class AdminField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      old_password: '',
      error_old_password: '',
      new_password: '',
      error_new_password: '',
      confirm_password: '',
      error_confirm_password: ''
    }
  }

  onOldChange = (val) => {
    let error = this.state.error_old_password;
    if (val.length === 0) {
      error = "Please fill in the old password.";
    }
    else {
      error = '';
    }
    this.setState({
      old_password: val,
      error_old_password: error
    }, this.onChange);
  }

  onNewChange = (val) => {
    let error = this.state.error_new_password;
    if (val.length < 3) {
      error = "The password must be at least 3 characters.";
    }
    else {
      error = '';
    }
    this.setState({
      new_password: val,
      error_new_password: error
    }, this.onChange);
  }

  onConfirmChange = (val) => {
    let error = this.state.error_confirm_password;
    if (val !== this.state.new_password) {
      error = "The passwords entered mismatch.";
    }
    else {
      error = '';
    }
    this.setState({
      confirm_password: val,
      error_confirm_password: error
    }, this.onChange);
  }

  onChange = () => {
    var s = this.state;
    var hasError = this.hasError();
    this.props.onChange({
      field: {
        old_password: s.old_password,
        new_password: s.new_password
      },
      error: hasError
    });
  }

  hasError = () => {
    var s = this.state;
    return s.error_new_password !== '' || s.error_confirm_password !== ''
    || s.error_old_password !== '' || s.old_password.length === 0
    || s.new_password.length === 0 || s.confirm_password.length === 0;
  }

  render() {
    return (
      <div>
        <InputField name="Old password" onChange={this.onOldChange} autoFocus
        error={ this.state.error_old_password } password/>
        <InputField name="New password" onChange={this.onNewChange}
        error={ this.state.error_new_password } password/>
        <InputField name="Confirm new password" onChange={this.onConfirmChange}
        error={ this.state.error_confirm_password } password/>
      </div>
    );
  };
}
