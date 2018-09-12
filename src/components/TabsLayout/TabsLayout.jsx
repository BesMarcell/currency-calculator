import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import theme from './theme.css';

class TabsLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
  };

  static defaultProps = {
    children: null,
  }

  render() {
    return (
      <div className={theme.layout}>
        <nav className={theme.nav}>
          <span className={theme.navItem}>
            <Link
              to="/calculator"
              activeClassName={theme.navItemActive}
            >
              Calculator
            </Link>
          </span>
          <span className={theme.navItem}>
            <Link
              to="/table"
              activeClassName={theme.navItemActive}
            >
              Table
            </Link>
          </span>
        </nav>
        <div className={theme.layoutBody}>{this.props.children}</div>
      </div>
    );
  }
}

export default TabsLayout;
