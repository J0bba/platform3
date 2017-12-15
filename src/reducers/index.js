import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Reducers
import auth from './auth';
import page from './page';
import create_fetcher from './fetcher';

const rootReducer = combineReducers({
  routing,
  page,
  auth,
  statements : create_fetcher('statement'),
  activities : create_fetcher('activitie'),
  user       : create_fetcher('user')
})

export default rootReducer
