import { all, fork } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';

import walletsListSaga from './wallets/walletsListSaga';
import createWalletSaga from './wallets/createWalletSaga';
import txsSaga from './wallet/txsSaga';

export default function* () {
  yield all([
    fork(formActionSaga),
    fork(walletsListSaga),
    fork(createWalletSaga),
    fork(txsSaga)
  ]);
}
