import { connect } from 'react-redux';
import {
  GET_CURRENCIES_PENDING,
} from '../actions';
import Caclulator from '../components/Caclulator';

const mapStateToProps = ({ currencies }) => ({
  currencyAbbrs: currencies.entities && currencies.entities.map(currency => ({
    label: currency.currency_code,
    value: currency.currency_code,
  })),
  currencies: currencies.entities,
  isCurrenciesLoading: currencies.isCurrenciesLoading,
});

const mapDispatchToProps = dispatch => ({
  getCurrencies: (date) => {
    dispatch({ type: GET_CURRENCIES_PENDING, payload: date });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Caclulator);
