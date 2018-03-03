'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _grommet = require('grommet');

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CButton = function (_Component) {
  _inherits(CButton, _Component);

  function CButton() {
    _classCallCheck(this, CButton);

    return _possibleConstructorReturn(this, (CButton.__proto__ || Object.getPrototypeOf(CButton)).apply(this, arguments));
  }

  _createClass(CButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onClick = _props.onClick,
          color = _props.color,
          danger = _props.danger;


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

        _react2.default.createElement(_grommet.Button, {
          label: 'Label',
          onClick: function onClick() {},
          className: [_styles2.default.button, danger ? 'danger' : '']
        })
      );
    }
  }]);

  return CButton;
}(_react.Component);

exports.default = CButton;