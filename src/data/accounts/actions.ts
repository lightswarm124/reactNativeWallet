import {
  GET_ACCOUNT_START,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAIL,
  LOGOUT_ACCOUNT,
  VIEW_SEED,
} from './constants';

import {Account} from './reducer';

const getAccountStart = () => ({
  type: GET_ACCOUNT_START,
  payload: null,
});

const getAccountFail = () => ({
  type: GET_ACCOUNT_FAIL,
  payload: null,
});

const logoutAccount = () => {
  return {
    type: LOGOUT_ACCOUNT,
    payload: null,
  };
};

const viewSeed = (address: string) => {
  return {
    type: VIEW_SEED,
    payload: {
      address,
    },
  };
};

export {
  // getAccount,
  getAccountStart,
  // getAccountSuccess,
  getAccountFail,
  logoutAccount,
  viewSeed,
};
