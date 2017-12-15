import * as types from '../types';

const url_API = 'http://localhost:8000/api/';

export const generate = (name) =>  {
  var name_up = name.toUpperCase();
  types.ALL[name_up + "_STARTED"] = name_up + "_STARTED" ;
  types.ALL[name_up + "_SUCCESS"] = name_up + "_SUCCESS" ;
  types.ALL[name_up + "_FAILED"] = name_up + "_FAILED" ;
};

export const action_started = (name) => ({
  type: types.ALL[name.toUpperCase() + "_STARTED"]
});

export const action_success = (name, data) => ({
  type: types.ALL[name.toUpperCase() + "_SUCCESS"],
  data
});

export const action_failed = (name, error) => ({
  type: types.ALL[name.toUpperCase() + "_FAILED"],
  error
});

// Must be returned
export const call_request = (name, url, method, body, success_function) => {
  return function(dispatch) {
    dispatch(action_started(name));

    fetch(url_API + url, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      },
      body: JSON.stringify(body)
    })
    .then(response=>response.json())
    .then(data => {
      if (data.success) {
        success_function(data);
        dispatch(action_success(name, data));
      } else {
        dispatch(action_failed(name, data));
      }
    })
  }
};

// Must be returned
export const call_get_request = (name, url, success_function) => {
  return function(dispatch) {
    dispatch(action_started(name));

    fetch(url_API + url, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
    })
    .then(response=>response.json())
    .then(data => {
      if (data.success) {
        success_function(data);
        dispatch(action_success(name, data));
      } else {
        dispatch(action_failed(name, data));
      }
    })
  }
};
