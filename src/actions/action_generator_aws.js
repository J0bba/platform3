import * as types from '../types';
import { invokeApig } from "../libs/awsLib";

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

    console.log(body);
    invokeApig({
      path: "/" + url,
      method: method,
      body: body,
    })
    .then(data => {
        success_function(data);
        dispatch(action_success(name, data));
    })
    .catch(e => {
      dispatch(action_failed(name, e));
      }
    )

  }
};

// Must be returned
export const call_get_request = (name, url, success_function) => {
  return function(dispatch) {
    dispatch(action_started(name));
    console.log(url);

    invokeApig({
      path: "/" + url,
      method: "GET",
    })
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
