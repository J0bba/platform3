import { browserHistory } from 'react-router'

const jwt_check = store => next => action => {
  if ('error' in action && 'token_error' in action.error) {
    localStorage.removeItem('jwt');
    localStorage.removeItem('id');
    browserHistory.push('/');
  }
  return next(action);
}

export default jwt_check;
