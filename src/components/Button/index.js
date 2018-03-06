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

    const { children, onClick, color, danger, background, padding, label } = this.props;

    return (
      <div>
        {/* <Button label={label + ' Gormmet'}  onClick={() => {}} className="button danger"> */}
          {/* <Spinning /> */}
        {/* </Button> */}

        <style jsx>{`
          div :global(.button) {
            color: ${color};
            background: ${background};
            padding: ${padding}
          }
        `}</style>
      

      <Button
        label={label + 'Button'}
        onClick={onClick}
        className={[styles.button, danger ? 'danger' : '']}
      />
      </div>
    );
  }
}

CButton.propTypes = propTypes;

export default CButton;
