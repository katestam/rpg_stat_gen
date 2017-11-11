"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Char_display = function (_React$Component) {
  _inherits(Char_display, _React$Component);

  function Char_display(props) {
    _classCallCheck(this, Char_display);

    return _possibleConstructorReturn(this, (Char_display.__proto__ || Object.getPrototypeOf(Char_display)).call(this, props));
  }

  _createClass(Char_display, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.characters
      );
    }
  }]);

  return Char_display;
}(React.Component);

window.Char_display = Char_display;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJfZGlzcGxheS5qc3giXSwibmFtZXMiOlsiQ2hhcl9kaXNwbGF5IiwicHJvcHMiLCJjaGFyYWN0ZXJzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsWTs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1SEFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0csYUFBS0EsS0FBTCxDQUFXQztBQURkLE9BREY7QUFLRDs7OztFQVh3QkMsTUFBTUMsUzs7QUFjakNDLE9BQU9MLFlBQVAsR0FBc0JBLFlBQXRCIiwiZmlsZSI6ImNoYXJfZGlzcGxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENoYXJfZGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGFyYWN0ZXJzfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5DaGFyX2Rpc3BsYXkgPSBDaGFyX2Rpc3BsYXk7Il19