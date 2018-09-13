import { connect } from 'react-redux';
import {
  GET_CURRENCIES_PENDING,
} from '../actions';
import СurrenciesTable from '../components/СurrenciesTable';

const mapStateToProps = ({ currencies }) => ({
  currencies: currencies.entities,
  isCurrenciesLoading: currencies.isCurrenciesLoading,
});

const mapDispatchToProps = dispatch => ({
  getCurrencies: (date) => {
    dispatch({ type: GET_CURRENCIES_PENDING, payload: date });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(СurrenciesTable);
