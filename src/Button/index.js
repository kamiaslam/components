import React, { Component } from 'react';

import Button from 'grommet/components/Button';
import Spinning from 'grommet/components/icons/Spinning';

export default class CButton extends Component {
  render() {
    const { children, onClick, color } = this.props;

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
        style={{ backgroundColor: color }}
      >
        <Spinning />
      </Button>
    );
  }
}
