import jsonp from 'jsonp';
import { connect } from 'react-redux';
import {
  GET_CURRENCIES_PENDING,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
} from '../actions';
import AppLayout from '../components/AppLayout';
import Endpoints from '../constants';

const mapStateToProps = ({ currencies }) => ({
  currencies: currencies.currenciesList,
});

const mapDispatchToProps = dispatch => ({
  getCurrencies: (date) => {
    dispatch({ type: GET_CURRENCIES_PENDING });
    jsonp(
      `${Endpoints.BASE_URL}/${Endpoints.tDAILY}/?${Endpoints.DATE}=${date}`,
      null,
      (err, data) => {
        if (err) {
          dispatch({
            type: GET_CURRENCIES_ERROR,
            payload: { err },
          });
        }
        dispatch({
          type: GET_CURRENCIES_SUCCESS,
          payload: { data },
        });
      },
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
