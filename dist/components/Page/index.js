'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _night = require('../../images/night.jpg');

var _night2 = _interopRequireDefault(_night);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react2.default.createElement(
        'div',
        {
          className: _style2.default.dynamic([['3997878441', [_night2.default]]]) + ' ' + 'page'
        },
        _react2.default.createElement(
          'header',
          {
            className: _style2.default.dynamic([['3997878441', [_night2.default]]]) + ' ' + 'page__header'
          },
          _react2.default.createElement(
            'h1',
            {
              className: _style2.default.dynamic([['3997878441', [_night2.default]]])
            },
            'logo'
          ),
          _react2.default.createElement(
            'div',
            {
              className: _style2.default.dynamic([['3997878441', [_night2.default]]]) + ' ' + 'auth-info'
            },
            _react2.default.createElement(
              'span',
              {
                className: _style2.default.dynamic([['3997878441', [_night2.default]]])
              },
              'You are logging on as ',
              _react2.default.createElement(
                'b',
                {
                  className: _style2.default.dynamic([['3997878441', [_night2.default]]])
                },
                'John Smith'
              )
            ),
            _react2.default.createElement(
              'a',
              {
                className: _style2.default.dynamic([['3997878441', [_night2.default]]])
              },
              'Not John Smith?'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: _style2.default.dynamic([['3997878441', [_night2.default]]]) + ' ' + 'page__content'
          },
          children
        ),
        _react2.default.createElement('footer', {
          className: _style2.default.dynamic([['3997878441', [_night2.default]]]) + ' ' + 'page__footer'
        }),
        _react2.default.createElement(_style2.default, {
          styleId: '3997878441',
          css: ['.page.__jsx-style-dynamic-selector{background-color:#1f262b;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', '.page__header.__jsx-style-dynamic-selector{padding:0 32px;min-height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}', '.page__content.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 6px;background-image:url(' + _night2.default + ');background-size:cover;background-position:center;}', '.page__footer.__jsx-style-dynamic-selector{height:50px;}', '.auth-info.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;font-size:0.8rem;color:rgba(255,255,255,0.8);font-weight:100;}', '.auth-info.__jsx-style-dynamic-selector b.__jsx-style-dynamic-selector{color:#ffffff;}', 'h1.__jsx-style-dynamic-selector{margin:0;color:#fff;font-size:1rem;}', '.auth-info.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}'],
          dynamic: [_night2.default]
        })
      );
    }
  }]);

  return Page;
}(_react.Component);

exports.default = Page;