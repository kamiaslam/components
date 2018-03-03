import React, { Component } from 'react';

export default class Paragraph extends Component {
  render() {
    const { children } = this.props;

    return (
      <p>
        {children}
        <style jsx>{`
          p {
            font-size: 0.875em;
            color: #333333;
          }
        `}</style>
      </p>
    );
  }
}
