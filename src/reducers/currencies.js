import {
  GET_CURRENCIES_PENDING,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
} from '../actions';

export const initialState = {
  entities: [],
};

export default function currencies(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENCIES_PENDING:
      return {
        ...state,
      };
    case GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        entities: action.payload.data,
      };
    case GET_CURRENCIES_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
}
