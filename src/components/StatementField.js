import React, { Component } from 'react'

import InputField from '../components/Field/InputField'

export default class StatementField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      errorMessage: ''
    }
  }

  onChange = (val) => {
    let errorMessage = this.state.errorMessage;
    if (val.length < 3) {
      errorMessage = "The message must be at least 3 characters.";
    }
    else {
      errorMessage = '';
    }
    this.setState({
      message: val,
      errorMessage: errorMessage
    }, () => {
      this.props.onChange({
        field: {
          message: this.state.message
        },
        error: errorMessage !== ''
      });
    });
  }

  render() {
    return (
      <div>
        <InputField name="Message" onChange={this.onChange} autoFocus
        hasFetched={ this.props.hasFetched } obj={ this.props.obj }
        objName="message" error={ this.state.errorMessage }/>
      </div>
    );
  };
}
