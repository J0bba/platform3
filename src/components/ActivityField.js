import React, { Component } from 'react'

import InputField from '../components/Field/InputField'
import TextArea from '../components/Field/TextArea'
import CheckBox from '../components/Field/CheckBox'
import Incrementor from '../components/Field/Incrementor'
import DropDown from '../components/Field/DropDown'

export default class ActivityField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      errorTitle: '',
      description: '',
      lvl: 1,
      nb_times: 1,
      def: false
    }
  }

  onTitleChange = (val) => {
    let error = this.state.errorTitle;
    if (val.length < 3) {
      error = "The title must be at least 3 characters.";
    }
    else {
      error = '';
    }
    this.setState({
      title: val,
      errorTitle: error
    }, this.onChange);
  }

  onDescriptionChange = (val) => {
    this.setState({description: val}, this.onChange)
  }

  onDefaultChange = (val) => {
    this.setState({def: val}, this.onChange);
  }

  onTimesChange = (val) => {
    this.setState({nb_times: val}, this.onChange);
  }

  onLevelChange = (val) => {
    this.setState({lvl: val.value}, this.onChange);
  }

  hasError = () => {
    var s = this.state;
    return s.errorTitle !== '';
  }

  onChange = () => {
    var s = this.state;
    var hasError = this.hasError();
    this.props.onChange({
      field: {
        title: s.title,
        description: s.description,
        level: s.lvl,
        nb_times: s.nb_times,
        default: s.def
      },
      error: hasError
    });
  }

  render() {
    return (
      <div>

        <InputField name="Title" onChange={this.onTitleChange} autoFocus
        hasFetched={ this.props.hasFetched } obj={ this.props.obj }
        objName="title" error={ this.state.errorTitle }/>

        <TextArea name="Description (optional)" onChange={this.onDescriptionChange}
        hasFetched={ this.props.hasFetched } obj={ this.props.obj }
        objName="description" placeholder="Enter description here..."/>

        <DropDown name="Level" onChange={this.onLevelChange}
        options={[
                  { value: 1, label: '1' },
                  { value: 2, label: '2' },
                  { value: 3, label: '3' }
                ]}
        hasFetched={ this.props.hasFetched } obj={ this.props.obj }
        objName="lvl"/>

        <Incrementor name="Nb times" onChange={this.onTimesChange}
        hasFetched={ this.props.hasFetched } obj={ this.props.obj }
        objName="nb_times"/>

        <CheckBox name="Is default" onChange={this.onDefaultChange}
        hasFetched={ this.props.hasFetched } obj={ this.props.obj }
        objName="def"/>
      </div>
    );
  };
}
