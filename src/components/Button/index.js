import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'grommet';

import styles from './styles.scss';

const propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

class CButton extends Component {
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
        onClick={onClick}
        className={[styles.button, danger ? 'danger' : '']}
      />
    );
  }
}

CButton.propTypes = propTypes;

export default CButton;
