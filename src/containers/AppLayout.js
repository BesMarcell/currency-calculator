import { connect } from 'react-redux';
import {
  GET_CURRENCIES_PENDING,
} from '../actions';
import AppLayout from '../components/AppLayout';

const mapStateToProps = ({ currencies }) => ({
  currencies: currencies.currenciesList,
  isCurrenciesLoading: currencies.isCurrenciesLoading,
});

const mapDispatchToProps = dispatch => ({
  getCurrencies: (date) => {
    dispatch({ type: GET_CURRENCIES_PENDING, payload: date });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
