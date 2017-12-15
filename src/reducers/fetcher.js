export default function create_fetcher(name) {
  name = name.toUpperCase();
  return function fetcher
 (
  state = {
    list: [],
    obj: {},
    error: '',
    hasFetched: false,
    hasUpdated: false,
    hasDeleted: false,
    hasPosted: false
  },
  action) {
    switch (action.type) {
      case "GET_" + name + "S_STARTED":
        return {
          ...state,
          error: '',
          hasFetched: false,
          hasUpdated: false,
          hasDeleted: false,
          hasPosted: false,
          obj: {}
        };
      case "GET_" + name + "S_SUCCESS":
        return {
          ...state,
          list: [
            ...action.data.list
          ],
          error: ''
        };
      case "GET_" + name + "S_FAILED":
        return {
          ...state,
          error: action.error
        };

      case "GET_" + name + "_STARTED":
        return {
          ...state,
          error: '',
          hasFetched: false
        };
      case "GET_" + name + "_SUCCESS":
        return {
          ...state,
          obj: action.data.obj,
          error: '',
          hasFetched: true
        };
      case "GET_" + name + "_FAILED":
        return {
          ...state,
          error: action.error,
          hasFetched: true
        };

      case "UPDATE_" + name + "_STARTED":
        return {
          ...state,
          error: '',
          hasUpdated: false
        };
      case "UPDATE_" + name + "_SUCCESS":
        return {
          ...state,
          error: '',
          hasUpdated: true
        };
      case "UPDATE_" + name + "_FAILED":
        return {
          ...state,
          error: action.error,
          hasUpdated: true
        };

      case "DELETE_" + name + "_STARTED":
        return {
          ...state,
          error: '',
        };
      case "DELETE_" + name + "_SUCCESS":
        return {
          ...state,
          error: '',
          hasDeleted: true
        };
      case "DELETE_" + name + "_FAILED":
        return {
          ...state,
          error: action.error
        };

      case "POST_" + name + "_STARTED":
        return {
          ...state,
          error: '',
        };
      case "POST_" + name + "_SUCCESS":
        return {
          ...state,
          error: '',
          hasPosted: true
        };
      case "POST_" + name + "_FAILED":
        return {
          ...state,
          error: action.error
        };
      case "CLEAR_" + name:
        return {
          ...state,
          hasFetched: false,
          hasUpdated: false,
          hasDeleted: false,
          hasPosted: false,
          obj: {},
          list: []
        };
      case "CLEAR_ERROR_" + name:
        return {
          ...state,
          error: ''
        };
      default:
        return state;
    }
  }
}
