export const GET_USERS_LIST = "GET_USERS_LIST";
export const FILTER_BY_CITY = "FILTER_BY_CITY";
export const FILTER_BY_NAME = "FILTER_BY_NAME";


export const getUsersList = (usersList) => ({
  type: GET_USERS_LIST,
  payload: usersList,
});

export const filteredByCity = () => ({
  type: FILTER_BY_CITY
});

export const filteredByName = () => ({
  type: FILTER_BY_NAME
});



export const getAllUsers = () => async (dispatch) => {
  // dispatch(setLoading(true));
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    dispatch(getUsersList(data));
    // dispatch(setLoading(false));
  } catch (err) {
    console.log(err);
  }
};

export const filterByCity = () => (dispatch) => {
  dispatch(filteredByCity())
}

export const filterByName = () => (dispatch) => {
  dispatch(filteredByName())
}


