import { connect } from 'react-redux';
import СurrenciesTable from '../components/СurrenciesTable';

const mapStateToProps = ({ currencies }) => ({
  currencies: currencies.entities,
});

export default connect(mapStateToProps)(СurrenciesTable);
