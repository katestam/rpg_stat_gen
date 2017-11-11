"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _React$createElement;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { method: "POST", action: "/newChar" },
          React.createElement("input", (_React$createElement = { type: "text", name: "name" }, _defineProperty(_React$createElement, "type", "text"), _defineProperty(_React$createElement, "placeholder", "Character name..."), _defineProperty(_React$createElement, "required", true), _React$createElement)),
          React.createElement(
            "select",
            { name: "race", required: true },
            React.createElement(
              "option",
              { type: "text", value: "dragonborn" },
              "Dragonborn"
            ),
            React.createElement(
              "option",
              { type: "text", value: "dwarf" },
              "Dwarf"
            ),
            React.createElement(
              "option",
              { type: "text", value: "half-elf" },
              "Half-elf"
            ),
            React.createElement(
              "option",
              { type: "text", value: "half-orc" },
              "Half-orc"
            ),
            React.createElement(
              "option",
              { type: "text", value: "halfling" },
              "Halfling"
            ),
            React.createElement(
              "option",
              { type: "text", value: "human" },
              "Human"
            ),
            React.createElement(
              "option",
              { type: "text", value: "tiefling" },
              "Tiefling"
            )
          ),
          React.createElement(
            "select",
            { type: "text", name: "class", required: true },
            React.createElement(
              "option",
              { type: "text", value: "barbarian" },
              "Barbarian"
            ),
            React.createElement(
              "option",
              { type: "text", value: "bard" },
              "Bard"
            ),
            React.createElement(
              "option",
              { type: "text", value: "cleric" },
              "Cleric"
            ),
            React.createElement(
              "option",
              { type: "text", value: "druid" },
              "Druid"
            ),
            React.createElement(
              "option",
              { type: "text", value: "fighter" },
              "Fighter"
            ),
            React.createElement(
              "option",
              { type: "text", value: "monk" },
              "Monk"
            ),
            React.createElement(
              "option",
              { type: "text", value: "paladin" },
              "Paladin"
            ),
            React.createElement(
              "option",
              { type: "text", value: "ranger" },
              "Ranger"
            ),
            React.createElement(
              "option",
              { type: "text", value: "rogue" },
              "Rogue"
            ),
            React.createElement(
              "option",
              { type: "text", value: "sorcerer" },
              "Sorcerer"
            ),
            React.createElement(
              "option",
              { type: "text", value: "warlock" },
              "Warlock"
            ),
            React.createElement(
              "option",
              { type: "text", value: "wizard" },
              "Wizard"
            )
          ),
          React.createElement("input", { type: "submit", value: "Generate!" })
        )
      );
    }
  }]);

  return Form;
}(React.Component);

window.Form = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0uanN4Il0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsSTs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1R0FDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sUUFBTyxNQUFiLEVBQW9CLFFBQU8sVUFBM0I7QUFDRSxpRUFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixrREFBb0MsTUFBcEMsd0RBQXVELG1CQUF2RCxrRkFERjtBQUVFO0FBQUE7QUFBQSxjQUFRLE1BQUssTUFBYixFQUFvQixjQUFwQjtBQUNFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxZQUExQjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxPQUExQjtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxVQUExQjtBQUFBO0FBQUEsYUFIRjtBQUlFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxVQUExQjtBQUFBO0FBQUEsYUFKRjtBQUtFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxVQUExQjtBQUFBO0FBQUEsYUFMRjtBQU1FO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxPQUExQjtBQUFBO0FBQUEsYUFORjtBQU9FO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxVQUExQjtBQUFBO0FBQUE7QUFQRixXQUZGO0FBV0U7QUFBQTtBQUFBLGNBQVEsTUFBSyxNQUFiLEVBQW9CLE1BQUssT0FBekIsRUFBaUMsY0FBakM7QUFDRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sV0FBMUI7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sTUFBMUI7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sUUFBMUI7QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sT0FBMUI7QUFBQTtBQUFBLGFBSkY7QUFLRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sU0FBMUI7QUFBQTtBQUFBLGFBTEY7QUFNRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sTUFBMUI7QUFBQTtBQUFBLGFBTkY7QUFPRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sU0FBMUI7QUFBQTtBQUFBLGFBUEY7QUFRRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sUUFBMUI7QUFBQTtBQUFBLGFBUkY7QUFTRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sT0FBMUI7QUFBQTtBQUFBLGFBVEY7QUFVRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sVUFBMUI7QUFBQTtBQUFBLGFBVkY7QUFXRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sU0FBMUI7QUFBQTtBQUFBLGFBWEY7QUFZRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sUUFBMUI7QUFBQTtBQUFBO0FBWkYsV0FYRjtBQXlCRSx5Q0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxXQUEzQjtBQXpCRjtBQURGLE9BREY7QUErQkQ7Ozs7RUFyQ2dCQyxNQUFNQyxTOztBQXlDekJDLE9BQU9KLElBQVAsR0FBY0EsSUFBZCIsImZpbGUiOiJmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiL25ld0NoYXJcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDaGFyYWN0ZXIgbmFtZS4uLlwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwicmFjZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiZHJhZ29uYm9yblwiPkRyYWdvbmJvcm48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImR3YXJmXCI+RHdhcmY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImhhbGYtZWxmXCI+SGFsZi1lbGY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImhhbGYtb3JjXCI+SGFsZi1vcmM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImhhbGZsaW5nXCI+SGFsZmxpbmc8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImh1bWFuXCI+SHVtYW48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cInRpZWZsaW5nXCI+VGllZmxpbmc8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8c2VsZWN0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNsYXNzXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJiYXJiYXJpYW5cIj5CYXJiYXJpYW48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImJhcmRcIj5CYXJkPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJjbGVyaWNcIj5DbGVyaWM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImRydWlkXCI+RHJ1aWQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImZpZ2h0ZXJcIj5GaWdodGVyPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJtb25rXCI+TW9uazwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwicGFsYWRpblwiPlBhbGFkaW48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cInJhbmdlclwiPlJhbmdlcjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwicm9ndWVcIj5Sb2d1ZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwic29yY2VyZXJcIj5Tb3JjZXJlcjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwid2FybG9ja1wiPldhcmxvY2s8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cIndpemFyZFwiPldpemFyZDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSFcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG53aW5kb3cuRm9ybSA9IEZvcm07Il19