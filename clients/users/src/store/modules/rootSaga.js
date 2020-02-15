import { all } from 'redux-saga/effects';

import subscription from './subscription/sagas';

export default function* rootSaga() {
  return yield all([subscription]);
}
