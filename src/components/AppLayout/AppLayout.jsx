import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TabsLayout from '../TabsLayout';

class AppLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
  };

  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <TabsLayout>
        {this.props.children}
      </TabsLayout>
    );
  }
}

export default AppLayout;
