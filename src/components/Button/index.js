import React, { Component } from 'react';

import { Button } from 'grommet';

import styles from './styles.scss';

export default class CButton extends Component {
  render() {
    const { children, onClick, color, danger } = this.props;

    return (
      // <div>
      //   <Button label="Label" onClick={() => {}} className="button">
      //     <Spinning />
      //   </Button>

      //   <style jsx>{`
      //     div :global(.button) {
      //       color: ${color};
      //     }
      //   `}</style>
      // </div>

      <Button
        label="Label"
        onClick={() => {}}
        className={[styles.button, danger ? 'danger' : '']}
      />
    );
  }
}
