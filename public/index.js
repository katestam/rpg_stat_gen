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
        that.setState({
          characters: data
        });
      }).done();
    }
  }, {
    key: 'test',
    value: function test(e) {
      console.log(e);
      e.preventDefault();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.get();
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
        React.createElement(Char_display, { characters: this.state.characters })
      );
    }
  }]);

  return Index;
}(React.Component);

ReactDOM.render(React.createElement(Index, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInN0YXRlIiwiY2hhcmFjdGVycyIsInRoYXQiLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJkYXRhIiwic2V0U3RhdGUiLCJkb25lIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImdldCIsInRlc3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVk7QUFERCxLQUFiO0FBRmlCO0FBS2xCOzs7OzBCQUVLO0FBQ0osVUFBSUMsT0FBTyxJQUFYOztBQUVBQyxRQUFFQyxJQUFGLENBQU87QUFDTEMsZ0JBQVEsS0FESDtBQUVMQyxhQUFLO0FBRkEsT0FBUCxFQUdHQyxJQUhILENBR1EsVUFBU0MsSUFBVCxFQUFlO0FBQ3JCTixhQUFLTyxRQUFMLENBQWM7QUFDWlIsc0JBQVlPO0FBREEsU0FBZDtBQUdELE9BUEQsRUFPR0UsSUFQSDtBQVFEOzs7eUJBRUlDLEMsRUFBRztBQUNOQyxjQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQUEsUUFBRUcsY0FBRjtBQUNEOzs7d0NBRW1CO0FBQ2xCLFdBQUtDLEdBQUw7QUFDRDs7OzZCQUVROztBQUVQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUUsNEJBQUMsSUFBRCxJQUFNLE1BQU0sS0FBS0MsSUFBakIsR0FGRjtBQUdFLDRCQUFDLFlBQUQsSUFBYyxZQUFZLEtBQUtoQixLQUFMLENBQVdDLFVBQXJDO0FBSEYsT0FERjtBQVFEOzs7O0VBeENpQmdCLE1BQU1DLFM7O0FBMkMxQkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxLQUFELE9BQWhCLEVBQTJCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQTNCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hhcmFjdGVyczogW11cbiAgICB9O1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL2FsbENoYXJzJ1xuICAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgIGNoYXJhY3RlcnM6IGRhdGFcbiAgICAgIH0pO1xuICAgIH0pLmRvbmUoKTtcbiAgfVxuXG4gIHRlc3QoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxuICAgICAgICA8Rm9ybSB0ZXN0PXt0aGlzLnRlc3R9IC8+XG4gICAgICAgIDxDaGFyX2Rpc3BsYXkgY2hhcmFjdGVycz17dGhpcy5zdGF0ZS5jaGFyYWN0ZXJzfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEluZGV4IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==