import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as fetcher from '../actions/fetcher'

// Components
import Header from '../components/Common/Header'
import Menu from '../components/Common/Menu'
import Footer from '../components/Common/Footer'

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'activitie'
    }
  }

  componentWillMount() {
    this.props.dispatch(fetcher.get_all(this.state.name));
  }

  changeTab = () => {
    this.props.dispatch(fetcher.clear_error(this.state.name));
  }

  render() {
    return (
      <div>
        <Header/>

        <Menu active={this.props.page.tab_name} changeTab={this.changeTab}/>

        {this.props.main}

        <Footer/>
      </div>
    );
  };
}


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Main);
