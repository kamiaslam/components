import React, { Component } from 'react';

import { Button } from 'grommet';

import styles from './styles.scss';

export default class CButton extends Component {
  render() {
    const { children, onClick, color, danger, background, padding } = this.props;

    return (
      <div>
        <Button label="Label" onClick={() => {}} className="button">
          {/* <Spinning /> */}
        </Button>

        <style jsx>{`
          div :global(.button) {
            color: ${color};
            background: ${background};
            padding: ${padding}
          }
        `}</style>
      </div>

      // <Button
      //   label="Label"
      //   onClick={() => {}}
      //   className={[styles.button, hsbc--red ? 'hsbc--red' : '']}
      // />
    );
  }
}
