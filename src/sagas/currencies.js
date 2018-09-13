import { call, put, takeLatest, all } from 'redux-saga/effects';
import connectors from '../api/currencies';

import {
  GET_CURRENCIES_PENDING,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,

} from '../actions';

function* getCurriencies({ payload = {} }) {
  try {
    const entities = yield call(connectors.getAllAdapter, payload.date);
    yield put({
      type: GET_CURRENCIES_SUCCESS,
      payload: { data: entities },
    });
  } catch (error) {
    yield put({ type: GET_CURRENCIES_ERROR, payload: { error: error.message } });
  }
}

export default function () {
  return all([
    takeLatest(GET_CURRENCIES_PENDING, getCurriencies),
  ]);
}
