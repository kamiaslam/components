import React, { Component } from 'react';

import image from '../../images/night.jpg';

export default class Page extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="page">
        <header className="page__header">
          <h1>logo</h1>
          <div className="auth-info">
            <span>
              You are logging on as <b>John Smith</b>
            </span>
            <a>Not John Smith?</a>
          </div>
        </header>

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
            padding: 0 32px;
            min-height: 50px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          .page__content {
            flex: 1;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            margin: 0 6px;
            background-image: url(${image});
            background-size: cover;
            background-position: center;
          }

          .page__footer {
            height: 50px;
          }

          .auth-info {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            font-size: 0.8rem;

            color: rgba(255, 255, 255, 0.8);
            font-weight: 100;
          }

          .auth-info b {
            color: #ffffff;
          }

          h1 {
            margin: 0;
            color: #fff;
            font-size: 1rem;
          }

          .auth-info a {
            text-decoration: underline;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}
