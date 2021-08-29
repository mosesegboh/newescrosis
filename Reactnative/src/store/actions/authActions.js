import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  API_URI,
  REG_LOADING,
  LOG_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
} from './types';
import {CLEAR_ERRORS} from './types';
import {returnErrors} from './errActions';

export const register = (newUser) => async (dispatch) => {
  dispatch({type: REG_LOADING})

  const data = JSON.stringify(newUser);

  await axios ({
    method: "POST",
    url: `${API_URI}/api/users`,
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {})
  .catch((err) => {
    dispatch({type: REGISTER_FAIL});
    dispatch(
      returnErrors(err.response.data.msg, 
                  err.response.status, 
                  'REGISTER_FAIL',
      ),
    );
  });
};

//** Amazon Load User */
export const loadUser = () => async (dispatch) => {};
