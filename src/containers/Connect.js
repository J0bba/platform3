import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import { browserHistory } from 'react-router'
import config from "../config";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from "amazon-cognito-identity-js";

// Components
import Header from '../components/Common/Header'
import Login from '../components/Login'
import Footer from '../components/Common/Footer'

class Connect extends Component {
  componentWillMount() {
    if (localStorage.getItem('jwt') !== null) {
      browserHistory.push('/statements');
    }
  }

  login(pseudo, password) {
    this.props.dispatch(login(pseudo, password));
    // this.callCognito(pseudo, password);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLogged) {
      browserHistory.push('/statements');
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="hero-body column is-4 is-offset-4 has-text-centered">
          <div className="box">
            <h2 className="title has-text-grey">Connexion</h2>
            <p className="subtitle has-text-grey">Veuillez vous connecter pour continuer.</p>
            <Login login={(pseudo, password) => this.login(pseudo, password)}
              isLoggingIn={this.props.isLoggingIn}/>
            { this.props.error }
          </div>
        </div>
        <Footer/>
      </div>
    );
  };
}

function mapStateToProps(state) {
  const { auth } = state;

  return {
    isLogged: auth.isLogged,
    isLoggingIn: auth.isLoggingIn,
    error: auth.error
  }
}

export default connect(mapStateToProps)(Connect);
