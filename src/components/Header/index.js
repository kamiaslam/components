import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

export default class Header extends Component {
  render() {
    const { className } = this.props;

    const classes = classnames(styles.header, className);

    return (
      <header className={classes}>
        <div className={`${styles.header}__content`}>header</div>
      </header>
    );
  }
}




