import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'
import { browserHistory } from 'react-router'
import * as page from '../actions/page'

// Components
import StatementField from '../components/StatementField'

class StatementCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'statement',
      field: null,
      hasFormError: true
    }
  }

  componentWillMount(nextProps) {
    this.props.dispatch(page.change_tab('statements'));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasPosted) {
      browserHistory.push('/statements');
    }
  }

  onFieldChange = (newField) => {
    this.setState({
      field: newField.field,
      hasFormError: newField.error
    });
  }

  create = () => {
    this.props.dispatch(fetcher.post_obj(this.state.name, {
      data: this.state.field}));
  }

  render() {
    return (
      <div>
        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <StatementField onChange={this.onFieldChange}/>

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
  const { statements } = state;

  return {
    hasPosted: statements.hasPosted
  }
}

export default connect(mapStateToProps)(StatementCreator);
