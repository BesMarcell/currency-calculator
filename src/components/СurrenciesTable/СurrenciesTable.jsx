import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TODAY } from '../../constants';
import theme from './theme.css';

class СurrenciesTable extends PureComponent {
  static propTypes = {
    currencies: PropTypes.array.isRequired,
    getCurrencies: PropTypes.func.isRequired,
    isCurrenciesLoading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.getCurrencies(TODAY);
  }

  render() {
    return (
      <div className={theme.сurrenciesTable}>
        {this.props.isCurrenciesLoading
          ? <div>Loading...</div>
          : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Currency_code</TableCell>
                  <TableCell>Buying rate</TableCell>
                  <TableCell>Selling rate</TableCell>
                  <TableCell>Median rate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.currencies.map(row => (
                  <TableRow key={row.currency_code}>
                    <TableCell component="th" scope="row">
                      {row.currency_code}
                    </TableCell>
                    <TableCell>{row.buying_rate}</TableCell>
                    <TableCell>{row.selling_rate}</TableCell>
                    <TableCell>{row.median_rate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )
        }
      </div>
    );
  }
}

export default СurrenciesTable;
