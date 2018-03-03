"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = require("styled-jsx/style");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          footer = _props.footer;


      return _react2.default.createElement(
        "div",
        {
          className: "jsx-623356226" + " " + "card"
        },
        _react2.default.createElement(
          "h3",
          {
            className: "jsx-623356226" + " " + "card__title"
          },
          title
        ),
        children,
        _react2.default.createElement(
          "div",
          {
            className: "jsx-623356226" + " " + "card__footer"
          },
          footer
        ),
        _react2.default.createElement(_style2.default, {
          styleId: "623356226",
          css: [".card.jsx-623356226{width:500px;border:3px solid #1f262b;background-color:#ffffff;padding:48px 28px 16px 28px;}", ".card__title.jsx-623356226{font-size:1.4rem;font-weight:100;color:#333333;}", ".card__footer.jsx-623356226{border-top:1px solid #1f262b;padding-top:16px;}"]
        })
      );
    }
  }]);

  return Page;
}(_react.Component);

exports.default = Page;