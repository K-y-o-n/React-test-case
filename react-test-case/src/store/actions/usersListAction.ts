import { Dispatch } from "react"
import { AnyAction } from "redux"

export enum UserListActionTypes {
  GET_USERS_LIST = "GET_USERS_LIST",
  FILTER_BY_CITY = "FILTER_BY_CITY",
  FILTER_BY_NAME = "FILTER_BY_NAME"
}

export interface IUser {
  id: number,
  name: string
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export type UsersListType = IUser[]


export const getUsersList = (usersList:UsersListType) => ({
  type: UserListActionTypes.GET_USERS_LIST,
  payload: usersList,
});

export const filteredByCity = () => ({
  type: UserListActionTypes.FILTER_BY_CITY
});

export const filteredByName = () => ({
  type: UserListActionTypes.FILTER_BY_NAME
});

export const getAllUsers = () => async (dispatch:Dispatch<AnyAction>) => {
  // dispatch(setLoading(true));
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data:UsersListType = await response.json();
    dispatch(getUsersList(data));
    // dispatch(setLoading(false));
  } catch (err) {
    console.log(err);
  }
};

export const filterByCity = () => (dispatch:Dispatch<AnyAction>) => {
  dispatch(filteredByCity())
}

export const filterByName = () => (dispatch:Dispatch<AnyAction>) => {
  dispatch(filteredByName())
}
