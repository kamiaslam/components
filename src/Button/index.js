import React, { Component } from 'react';

import Button from 'grommet/components/Button';

export default class CButton extends Component {
  render() {
    const { children, onClick, color } = this.props;

    return (
      <Button label="Label" onClick={() => { }} className="button" style={{backgroundColor: color}}>
      {/* <style jsx>{`
      .button {
        border: none;
        background-color: '${color}'
      }`}</style> */}
      </Button>
    );
  }
}
