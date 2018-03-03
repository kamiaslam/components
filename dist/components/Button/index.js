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
          color = _props.color;


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

        _react2.default.createElement(
          _grommet.Button,
          { label: 'Label', onClick: function onClick() {}, className: _styles2.default.button },
          _react2.default.createElement(
            _grommet.SVGIcon,
            {
              viewBox: '0 0 130 108',
              version: '1.1',
              type: 'logo',
              a11yTitle: 'Locations Finder'
            },
            _react2.default.createElement(
              'g',
              {
                stroke: '#865CD6',
                strokeWidth: '4',
                fill: 'none',
                strokeLinejoin: 'round'
              },
              _react2.default.createElement('path', { d: 'M40,65 L40,96 L16,107 L16,49 L16,49 L28.4679195,43.2855369 M75.6892892,43.6424091 L88,38 L88,96 L64,107 L64,64.5 L64,64.5 M64,64 L64,107 L40,96 L40,65 M89,38 L113,49 L113,107 L89,96 L89,38 Z M52,49 C56.971,49 61,44.971 61,40 C61,35.029 56.971,31 52,31 C47.029,31 43,35.029 43,40 C43,44.971 47.029,49 52,49 L52,49 Z M52,76 C52,76 28,58 28,40 C28,25 40,16 52,16 C64,16 76,25 76,40 C76,58 52,76 52,76 Z' })
            )
          )
        )
      );
    }
  }]);

  return CButton;
}(_react.Component);

exports.default = CButton;