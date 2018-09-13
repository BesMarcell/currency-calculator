import { connect } from 'react-redux';
import Caclulator from '../components/Caclulator';

const mapStateToProps = ({ currencies }) => ({
  currencyAbbrs: currencies.entities && currencies.entities.map(currency => ({
    label: currency.currency_code,
    value: currency.currency_code,
  })),
  currencies: currencies.entities,
});

export default connect(mapStateToProps)(Caclulator);
