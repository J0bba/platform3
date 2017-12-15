import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'
import * as page from '../actions/page'

// Components
import List from '../components/List'
import Adder from '../components/Adder'

class Statements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'statement'
    }
  }

  componentWillMount(nextProps) {
    this.props.dispatch(page.change_tab('statements'));
    this.props.dispatch(fetcher.get_all(this.state.name));
  }

  render() {
    return (
      <div>
        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <List titles={["Name"]} list={this.props.list} edit_address="statements"/>
            <Adder type='statement'/>
          </div>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { auth, statements } = state;

  return {
    isLogged: auth.isLogged,
    list: statements.list
  }
}

export default connect(mapStateToProps)(Statements);
