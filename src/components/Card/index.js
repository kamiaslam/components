import React, { Component } from 'react';

export default class Page extends Component {
  render() {
    const { children, title, footer } = this.props;

    return (
      <div className="card">
        <h3 className="card__title">{title}</h3>

        {children}

        <div className="card__footer">{footer}</div>

        <style jsx>{`
          .card {
            width: 500px;
            border: 3px solid #1f262b;
            background-color: #ffffff;

            padding: 48px 28px 16px 28px;
          }

          .card__title {
            font-size: 1.4rem;
            font-weight: 100;
          }

          .card__footer {
            border-top: 1px solid #1f262b;
            padding-top: 16px;
          }
        `}</style>
      </div>
    );
  }
}
