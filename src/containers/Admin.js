import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'
import { browserHistory } from 'react-router'
import * as page from '../actions/page'

// Components
import ErrorDisplayer from '../components/Common/ErrorDisplayer'
import AdminField from '../components/AdminField'

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'user',
      field: null,
      hasFormError: true
    }
  }

  componentWillMount(nextProps) {
    this.props.dispatch(page.change_tab('admin'));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasUpdated) {
      this.props.dispatch(fetcher.clear(this.state.name));
      browserHistory.push('/admin');
    }
  }

  update = () => {
    var toSend = {
      id: localStorage.getItem('id'),
      ...this.state.field
    };

    this.props.dispatch(fetcher.update_obj(this.state.name, toSend));
  }

  onFieldChange = (newField) => {
    this.setState({
      field: newField.field,
      hasFormError: newField.error
    });
  }

  render() {
    return (
      <div>
        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <ErrorDisplayer message={this.props.error.error}/>
            <AdminField onChange={this.onFieldChange}
            hasFetched={ this.props.hasFetched } obj={ this.props.obj }/>

            <button className="button is-info is-large has-addons is-centered"
              onClick={this.update} disabled={this.state.hasFormError}>
              Update
            </button>
          </div>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { user } = state;

  return {
    error: user.error,
    hasUpdated: user.hasUpdated
  }
}

export default connect(mapStateToProps)(Admin);
