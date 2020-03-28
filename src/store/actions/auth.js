import { LOGIN, LOGOUT } from './actionTypes';

// Action params
function loginAction(user) {
  return {
    user: user,
    type: LOGIN
  };
}

// Action params
function logoutAction() {
  return {
    user: {},
    type: LOGOUT,
  };
}

// Dispatchable actions
export const logIn = (user) => dispatch => dispatch(loginAction(user));

export const logOut = () => dispatch => dispatch(logoutAction());