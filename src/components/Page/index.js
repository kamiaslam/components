import React, { Component } from 'react';

import image from '../../images/night.jpg';

export default class Page extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="page">
        <header className="page__header" />

        <div className="page__content">{children}</div>

        <footer className="page__footer" />

        <style jsx>{`
          .page {
            background-color: #1f262b;
            min-height: 100vh;

            display: flex;
            flex-direction: column;
          }

          .page__header {
            height: 50px;
          }

          .page__content {
            flex: 1;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            margin: 6px;
            background-image: url(${image});
            background-size: cover;
            background-position: center;
          }

          .page__footer {
            height: 50px;
          }
        `}</style>
      </div>
    );
  }
}
