export default function auth (
  state = {
    tab_name: ''
  },
  action
) {
  switch (action.type) {
    case "CHANGE_TAB":
      return {
        ...state,
        tab_name: action.tab_name
      };
    default:
      return state;
  }
}
