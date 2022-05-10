import { GET_USERS_LIST } from "../actions/usersListAction";
import { FILTER_BY_CITY } from "../actions/usersListAction";
import { FILTER_BY_NAME } from "../actions/usersListAction";

const initialState = [];

function usersListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_LIST:
      return state = action.payload;

    case FILTER_BY_NAME:
      return state.slice().sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      })

    case FILTER_BY_CITY:
      return state.slice().sort((a, b) => {
        if (a.address.city > b.address.city) {
          return 1;
        }
        if (a.address.city < b.address.city) {
          return -1;
        }
        return 0;
      })

    default:
      return state;
  }
}

export default usersListReducer;