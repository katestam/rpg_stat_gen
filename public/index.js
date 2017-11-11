'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.state = {
      characters: []
    };
    return _this;
  }

  _createClass(Index, [{
    key: 'get',
    value: function get() {
      var that = this;

      $.ajax({
        method: 'GET',
        url: '/allChars'
      }).then(function (data) {
        that.state.characters = data;
      }).done();
    }
  }, {
    key: 'test',
    value: function test(e) {
      console.log(e);

      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Hello, world!'
        ),
        React.createElement(Form, { test: this.test }),
        React.createElement(Char_display, { characters: this.characters })
      );
    }
  }]);

  return Index;
}(React.Component);

ReactDOM.render(React.createElement(Index, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInN0YXRlIiwiY2hhcmFjdGVycyIsInRoYXQiLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJkYXRhIiwiZG9uZSIsImUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJ0ZXN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZO0FBREQsS0FBYjtBQUZpQjtBQUtsQjs7OzswQkFFSztBQUNKLFVBQUlDLE9BQU8sSUFBWDs7QUFFQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGdCQUFRLEtBREg7QUFFTEMsYUFBSztBQUZBLE9BQVAsRUFHR0MsSUFISCxDQUdRLFVBQVNDLElBQVQsRUFBZTtBQUNyQk4sYUFBS0YsS0FBTCxDQUFXQyxVQUFYLEdBQXdCTyxJQUF4QjtBQUNELE9BTEQsRUFLR0MsSUFMSDtBQU1EOzs7eUJBRUlDLEMsRUFBRztBQUNOQyxjQUFRQyxHQUFSLENBQVlGLENBQVo7O0FBRUFBLFFBQUVHLGNBQUY7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSw0QkFBQyxJQUFELElBQU0sTUFBTSxLQUFLQyxJQUFqQixHQUZGO0FBR0UsNEJBQUMsWUFBRCxJQUFjLFlBQVksS0FBS2IsVUFBL0I7QUFIRixPQURGO0FBT0Q7Ozs7RUFqQ2lCYyxNQUFNQyxTOztBQW9DMUJDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsS0FBRCxPQUFoQixFQUEyQkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUEzQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoYXJhY3RlcnM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGdldCgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy9hbGxDaGFycydcbiAgICB9KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHRoYXQuc3RhdGUuY2hhcmFjdGVycyA9IGRhdGE7XG4gICAgfSkuZG9uZSgpO1xuICB9XG5cbiAgdGVzdChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5IZWxsbywgd29ybGQhPC9oMT5cbiAgICAgICAgPEZvcm0gdGVzdD17dGhpcy50ZXN0fSAvPlxuICAgICAgICA8Q2hhcl9kaXNwbGF5IGNoYXJhY3RlcnM9e3RoaXMuY2hhcmFjdGVyc30vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8SW5kZXggLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19