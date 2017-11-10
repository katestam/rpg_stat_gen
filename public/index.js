'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hello = function (_React$Component) {
  _inherits(Hello, _React$Component);

  function Hello() {
    _classCallCheck(this, Hello);

    return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
  }

  _createClass(Hello, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h1',
        null,
        'Hello, world!'
      );
    }
  }]);

  return Hello;
}(React.Component);

ReactDOM.render(React.createElement(Hello, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiSGVsbG8iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQO0FBQ0Q7Ozs7RUFIaUJDLE1BQU1DLFM7O0FBTTFCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEtBQUQsT0FBaEIsRUFBMEJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBIZWxsbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8SGVsbG8vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=