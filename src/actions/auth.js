import * as action_generator_aws from './action_generator_aws';

import config from "../config";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from "amazon-cognito-identity-js";
import { getCurrentUser } from "../libs/awsLib"

export const login = (pseudo, password) =>  {
  return function(dispatch) {
    let name = 'login'
    action_generator_aws.generate(name);

    dispatch(action_generator_aws.action_started(name));

    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });
    const user = new CognitoUser({Username: pseudo, Pool: userPool});
    const authentificationData = {Username: pseudo, Password: password};
    const authentificationDetails = new AuthenticationDetails(authentificationData);

    new Promise((resolve, reject) =>
      user.authenticateUser(authentificationDetails, {
        onSuccess: result => resolve(),
        onFailure: err => reject(err),
        newPasswordRequired: function(userAttributes, requiredAttributes){
          user.completeNewPasswordChallenge('admin2', userAttributes, this);
          cognitoCredentials.clearCachedId();
        }
      })
    ).then(function(){
      dispatch(action_generator_aws.action_success(name));
    }).catch(function(e){
      dispatch(action_generator_aws.action_failed(name, e));
    });
  }
}
