import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TabsLayout from '../TabsLayout';

class AppLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
    getCurrencies: PropTypes.func.isRequired,
    isCurrenciesLoading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    children: null,
  }

  componentDidMount() {
    this.props.getCurrencies(new Date().toISOString().substring(0, 10));
  }

  render() {
    return (
      <TabsLayout>
        {this.props.isCurrenciesLoading ? <div>Loading...</div> : this.props.children}
      </TabsLayout>
    );
  }
}

export default AppLayout;
