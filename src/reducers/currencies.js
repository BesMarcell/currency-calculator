import {
  GET_CURRENCIES_PENDING,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
} from '../actions';

export const initialState = {
  entities: [],
  isCurrenciesLoading: false,
  error: null,
};

export default function currencies(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENCIES_PENDING:
      return {
        ...state,
        isCurrenciesLoading: true,
      };
    case GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        entities: action.payload.data,
        isCurrenciesLoading: false,
      };
    case GET_CURRENCIES_ERROR:
      return {
        ...state,
        isCurrenciesLoading: false,
        error: action.payload.err,
      };
    default:
      return state;
  }
}
