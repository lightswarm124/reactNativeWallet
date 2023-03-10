import {createSelector} from 'reselect';
import {FullState} from '../store';

const accountsSelector = (state: FullState) => state.accounts;

const accountsByIdSelector = (state: FullState) => state.accounts.byId;

const activeAccountIdSelector = (state: FullState) => state.accounts.activeId;

const keypairsByAccountSelector = (state: FullState) =>
  state.accounts.keypairsByAccount;

const activeAccountSelector = createSelector(
  accountsByIdSelector,
  activeAccountIdSelector,
  (byId, activeId) => {
    return activeId ? byId[activeId] : null;
  },
);
