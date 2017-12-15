export default function auth (
  state = {
    user_id: '',
    jwt: '',
    error: '',
    isLoggingIn: false,
    isLogged: false
  },
  action
) {
  switch (action.type) {
    case "LOGIN_STARTED":
      return {
        ...state,
        isLoggingIn: true,
        error: ''
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        // user_id: action.data.id,
        isLoggingIn: false,
        isLogged: true,
        error: ''
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        error: action.error,
        isLoggingIn: false
      };
    default:
      return state;
  }
}
