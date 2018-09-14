import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import formContolsId from './constants';
import getToday from '../../utils/getToday';
import styles from './styles';
import customTheme from './theme.css';

class Caclulator extends PureComponent {
  static propTypes = {
    currencyAbbrs: PropTypes.array.isRequired,
    currencies: PropTypes.array.isRequired,
    getCurrencies: PropTypes.func.isRequired,
    isCurrenciesLoading: PropTypes.bool.isRequired,
    classes: PropTypes.object,
  };

  static defaultProps = {
    classes: {},
  }

  state = {
    firstValue: 1,
    secondValue: 1,
    firstCurrency: '',
    secondCurrency: '',
    firstCurrencyMedianRate: 1,
    secondCurrencyMedianRate: 1,
  }

  componentDidMount() {
    this.props.getCurrencies(getToday());
  }

  setMedianRate = (selectedCurrency, currencyId) => {
    const medianRate = this.props.currencies
      .find(currency => currency.currency_code === selectedCurrency)
      .median_rate;
    this.setState({ [`${currencyId}MedianRate`]: medianRate }, () => {
      this.calculator(
        currencyId,
        this.state.firstValue,
        this.state.firstCurrencyMedianRate,
        this.state.secondCurrencyMedianRate,
      );
    });
  }

  handleChangeCurrency = (event) => {
    const currencyId = event.target.id;
    this.setState({ [currencyId]: event.target.value }, () => {
      this.setMedianRate(this.state[currencyId], currencyId);
    });
  }

  handleChangeValue = (event) => {
    const textFieldId = event.target.id;
    this.setState({ [textFieldId]: event.target.value }, () => {
      this.calculator(
        textFieldId,
        this.state[textFieldId],
        this.state.firstCurrencyMedianRate,
        this.state.secondCurrencyMedianRate,
      );
    });
  }

  calculator = (changed, value, firstCurrencyMedianRate, secondCurrencyMedianRate) => {
    if (changed === formContolsId.secondValue) {
      this.setState({
        firstValue: (value * (firstCurrencyMedianRate / secondCurrencyMedianRate)).toFixed(2),
      });
    } else {
      this.setState({
        secondValue: (value * (secondCurrencyMedianRate / firstCurrencyMedianRate)).toFixed(2),
      });
    }
  }

  render() {
    const { firstValue, secondValue, firstCurrency, secondCurrency } = this.state;
    const { currencyAbbrs, classes } = this.props;
    return (
      <div>
        {this.props.isCurrenciesLoading
          ? <div>Loading...</div>
          : (
            <div className={customTheme.calculator}>
              <div className={customTheme.section}>
                <TextField
                  id={formContolsId.firstValue}
                  value={firstValue}
                  onChange={this.handleChangeValue}
                  type="number"
                  error={false}
                  InputProps={{
                    classes: {
                      input: classes.customFont,
                    },
                  }}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
                <TextField
                  id={formContolsId.firstCurrency}
                  select
                  className={classes.textField}
                  value={firstCurrency.label}
                  onChange={this.handleChangeCurrency}
                  InputProps={{
                    classes: {
                      input: classes.customFont,
                    },
                  }}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.textField,
                    },
                  }}
                  margin="normal"
                >
                  {currencyAbbrs.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </div>
              <div className={customTheme.section}>
                <TextField
                  id={formContolsId.secondValue}
                  value={secondValue}
                  onChange={this.handleChangeValue}
                  type="number"
                  error={false}
                  InputProps={{
                    classes: {
                      input: classes.customFont,
                    },
                  }}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
                <TextField
                  id={formContolsId.secondCurrency}
                  select
                  className={classes.textField}
                  value={secondCurrency.label}
                  onChange={this.handleChangeCurrency}
                  InputProps={{
                    classes: {
                      input: classes.customFont,
                    },
                  }}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.textField,
                    },
                  }}
                  margin="normal"
                >
                  {currencyAbbrs.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default withStyles(styles)(Caclulator);
