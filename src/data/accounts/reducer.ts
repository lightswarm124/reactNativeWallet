import {AnyAction} from 'redux';
import {
  GET_ACCOUNT_START,
  // GET_ACCOUNT_SUCCESS,
  // GET_ACCOUNT_FAIL,
  // LOGOUT_ACCOUNT,
  // VIEW_SEED,
} from './constants';

export interface ECPair {
  compressed: boolean;
  d: any;
  network: any;
  __Q: any;
}

export interface Account {
  address: string;
  addressSlp: string;
  keypair?: ECPair;
  mnemonic: string;
  accountIndex: number;
  seedViewed?: boolean;
  network: string;
}

export type State = {
  byId: {
    [accountId: string]: Account;
  };
  keypairsByAccount?: {
    [accountId: string]: {
      bch: ECPair;
      slp: ECPair;
    };
  };
  allIds: string[];
  activeId?: string | null;
};

export const initialState: State = {
  byId: {},
  allIds: [],
  activeId: null,
  keypairsByAccount: {},
};

const accounts = (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case GET_ACCOUNT_START:
      return state;

    // case GET_ACCOUNT_SUCCESS:
    //   return addAccount(state, action.payload);

    // case LOGOUT_ACCOUNT:
    //   return logoutAccount(state);

    // case VIEW_SEED:
    //   return setSeedViewed(state, action.payload);

    default:
      return state;
  }
};

export default accounts;
