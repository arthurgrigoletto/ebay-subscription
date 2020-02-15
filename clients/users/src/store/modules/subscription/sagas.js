import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { addSubscriptionSuccess, requestFailure } from './actions';

export function* addSubscription({ payload }) {
  try {
    const { email, interval, keywords } = payload;

    const response = yield call(api.post, 'subscriptions', {
      email,
      interval,
      keywords,
    });

    yield put(addSubscriptionSuccess(response.data));

    history.push('/');
  } catch (error) {
    console.tron.log(error.message);
    toast.error('Fail on Create Alert');
    yield put(requestFailure());
  }
}

export function* removeSubscription({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `subscriptions/${id}`);

    // eslint-disable-next-line no-restricted-globals
    location.reload();
  } catch (error) {
    toast.error('Fail on Delete Alert');
    yield put(requestFailure());
  }
}

export default all([
  takeLatest('@subscription/ADD_REQUEST', addSubscription),
  takeLatest('@subscription/REMOVE', removeSubscription),
]);
