import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'
import { browserHistory } from 'react-router'
import 'react-select/dist/react-select.css';
import * as page from '../actions/page'

// Components
import ActivityField from '../components/ActivityField'

class ActivityCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'statement',
      field: null,
      hasFormError: true
    }
  }

  componentWillMount(nextProps) {
      this.props.dispatch(page.change_tab('activities'));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasPosted) {
      browserHistory.push('/activities');
    }
  }

  create = () => {
    var toSend = {
      ...this.state.field
    };

    this.props.dispatch(fetcher.post_obj('activitie', toSend));
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
            <ActivityField onChange={this.onFieldChange}/>

            <button className="button is-info is-large has-addons is-centered"
              onClick={() => this.create()} disabled={this.state.hasFormError}>
              Create
            </button>
          </div>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { activities } = state;

  return {
    hasPosted: activities.hasPosted
  }
}

export default connect(mapStateToProps)(ActivityCreator);
