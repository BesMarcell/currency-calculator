import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import getToday from '../../utils/getToday';
import styles from './styles';

class СurrenciesTable extends PureComponent {
  static propTypes = {
    currencies: PropTypes.array.isRequired,
    getCurrencies: PropTypes.func.isRequired,
    isCurrenciesLoading: PropTypes.bool.isRequired,
    classes: PropTypes.object,
  };

  static defaultProps = {
    classes: {},
  }

  componentDidMount() {
    this.props.getCurrencies(getToday());
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.isCurrenciesLoading
          ? <div>Loading...</div>
          : (
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Currency code</TableCell>
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

export default withStyles(styles)(СurrenciesTable);
