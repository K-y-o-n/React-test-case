import { IUser, UsersListType } from "../actions/usersListAction";
import { UserListActionTypes } from "../actions/usersListAction";

const initialState:[] = [];

function usersListReducer(state:[]|UsersListType = initialState, action:{type:string, payload:UsersListType}) {
  switch (action.type) {
    case UserListActionTypes.GET_USERS_LIST:
      return state = action.payload;

    case UserListActionTypes.FILTER_BY_NAME:
      return state.slice().sort((a:IUser, b:IUser) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      })

    case UserListActionTypes.FILTER_BY_CITY:
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