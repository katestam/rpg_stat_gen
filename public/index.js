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
      characters: [],
      posted: false
    };
    _this.post = _this.post.bind(_this);
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
    key: 'post',
    value: function post(data) {
      var that = this;

      $.ajax({
        method: 'POST',
        url: '/newChar',
        data: JSON.stringify(data),
        contentType: 'application/json'
      }).then(this.get()).done();
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
          'RPG Character Generator'
        ),
        React.createElement(Form, { post: this.post }),
        React.createElement(
          'h4',
          null,
          'Recently created characters...'
        ),
        React.createElement(Char_display, { characters: this.state.characters })
      );
    }
  }]);

  return Index;
}(React.Component);

ReactDOM.render(React.createElement(Index, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInN0YXRlIiwiY2hhcmFjdGVycyIsInBvc3RlZCIsInBvc3QiLCJiaW5kIiwidGhhdCIsIiQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwidGhlbiIsImRhdGEiLCJzZXRTdGF0ZSIsImRvbmUiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudFR5cGUiLCJnZXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsa0JBQVksRUFERDtBQUVYQyxjQUFRO0FBRkcsS0FBYjtBQUlBLFVBQUtDLElBQUwsR0FBWSxNQUFLQSxJQUFMLENBQVVDLElBQVYsT0FBWjtBQU5pQjtBQU9sQjs7OzswQkFFSztBQUNKLFVBQUlDLE9BQU8sSUFBWDs7QUFFQUMsUUFBRUMsSUFBRixDQUFPO0FBQ0xDLGdCQUFRLEtBREg7QUFFTEMsYUFBSztBQUZBLE9BQVAsRUFHR0MsSUFISCxDQUdRLFVBQVNDLElBQVQsRUFBZTtBQUNyQk4sYUFBS08sUUFBTCxDQUFjO0FBQ1pYLHNCQUFZVTtBQURBLFNBQWQ7QUFHRCxPQVBELEVBT0dFLElBUEg7QUFRRDs7O3lCQUVJRixJLEVBQU07QUFDVCxVQUFJTixPQUFPLElBQVg7O0FBRUFDLFFBQUVDLElBQUYsQ0FBTztBQUNMQyxnQkFBUSxNQURIO0FBRUxDLGFBQUssVUFGQTtBQUdMRSxjQUFNRyxLQUFLQyxTQUFMLENBQWVKLElBQWYsQ0FIRDtBQUlMSyxxQkFBYTtBQUpSLE9BQVAsRUFLR04sSUFMSCxDQUtRLEtBQUtPLEdBQUwsRUFMUixFQU1DSixJQU5EO0FBT0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS0ksR0FBTDtBQUNEOzs7NkJBRVE7O0FBRVAsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSw0QkFBQyxJQUFELElBQU0sTUFBTSxLQUFLZCxJQUFqQixHQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUhGO0FBSUUsNEJBQUMsWUFBRCxJQUFjLFlBQVksS0FBS0gsS0FBTCxDQUFXQyxVQUFyQztBQUpGLE9BREY7QUFTRDs7OztFQWxEaUJpQixNQUFNQyxTOztBQXFEMUJDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsS0FBRCxPQUFoQixFQUEyQkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUEzQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoYXJhY3RlcnM6IFtdLFxuICAgICAgcG9zdGVkOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5wb3N0ID0gdGhpcy5wb3N0LmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvYWxsQ2hhcnMnXG4gICAgfSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgY2hhcmFjdGVyczogZGF0YVxuICAgICAgfSk7XG4gICAgfSkuZG9uZSgpO1xuICB9XG5cbiAgcG9zdChkYXRhKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgdXJsOiAnL25ld0NoYXInLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSkudGhlbih0aGlzLmdldCgpKVxuICAgIC5kb25lKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5SUEcgQ2hhcmFjdGVyIEdlbmVyYXRvcjwvaDE+XG4gICAgICAgIDxGb3JtIHBvc3Q9e3RoaXMucG9zdH0gLz5cbiAgICAgICAgPGg0PlJlY2VudGx5IGNyZWF0ZWQgY2hhcmFjdGVycy4uLjwvaDQ+XG4gICAgICAgIDxDaGFyX2Rpc3BsYXkgY2hhcmFjdGVycz17dGhpcy5zdGF0ZS5jaGFyYWN0ZXJzfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEluZGV4IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==