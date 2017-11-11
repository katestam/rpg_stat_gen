'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
  }

  _createClass(Index, [{
    key: 'post',
    value: function post(data) {
      // ajax call to newchar
    }
  }, {
    key: 'generate',
    value: function generate(e) {
      // take input from form
      // put into data object
      // send to post function
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
        React.createElement(Form, { generate: this.generate }),
        React.createElement(Char_display, null)
      );
    }
  }]);

  return Index;
}(React.Component);

ReactDOM.render(React.createElement(Index, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRhdGEiLCJlIiwiZ2VuZXJhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlHQUNYQSxLQURXO0FBRWxCOzs7O3lCQUVJQyxJLEVBQU07QUFDVDtBQUNEOzs7NkJBRVFDLEMsRUFBRztBQUNWO0FBQ0E7QUFDQTtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLDRCQUFDLElBQUQsSUFBTSxVQUFVLEtBQUtDLFFBQXJCLEdBRkY7QUFHRSw0QkFBQyxZQUFEO0FBSEYsT0FERjtBQU9EOzs7O0VBdkJpQkMsTUFBTUMsUzs7QUEwQjFCQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEtBQUQsT0FBaEIsRUFBMkJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBM0IiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcG9zdChkYXRhKSB7XG4gICAgLy8gYWpheCBjYWxsIHRvIG5ld2NoYXJcbiAgfVxuXG4gIGdlbmVyYXRlKGUpIHtcbiAgICAvLyB0YWtlIGlucHV0IGZyb20gZm9ybVxuICAgIC8vIHB1dCBpbnRvIGRhdGEgb2JqZWN0XG4gICAgLy8gc2VuZCB0byBwb3N0IGZ1bmN0aW9uXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5IZWxsbywgd29ybGQhPC9oMT5cbiAgICAgICAgPEZvcm0gZ2VuZXJhdGU9e3RoaXMuZ2VuZXJhdGV9IC8+XG4gICAgICAgIDxDaGFyX2Rpc3BsYXkgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEluZGV4IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==