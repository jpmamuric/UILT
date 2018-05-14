import axios from 'axios';

import * as types from './types';

export const getUser = () => async dispatch => {
  const res = await axios.get('/auth/current_user');
  dispatch({ type: types.GET_USER, payload: res.data });
}
