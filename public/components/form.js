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
              { selected: true, value: "" },
              "Select a race..."
            ),
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
              { selected: true, value: "" },
              "Select a class..."
            ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0uanN4Il0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsSTs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1R0FDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sUUFBTyxNQUFiLEVBQW9CLFFBQU8sVUFBM0I7QUFDRSxpRUFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixrREFBb0MsTUFBcEMsd0RBQXVELG1CQUF2RCxrRkFERjtBQUVFO0FBQUE7QUFBQSxjQUFRLE1BQUssTUFBYixFQUFvQixjQUFwQjtBQUNFO0FBQUE7QUFBQSxnQkFBUSxjQUFSLEVBQWlCLE9BQU0sRUFBdkI7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sWUFBMUI7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sT0FBMUI7QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sVUFBMUI7QUFBQTtBQUFBLGFBSkY7QUFLRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sVUFBMUI7QUFBQTtBQUFBLGFBTEY7QUFNRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sVUFBMUI7QUFBQTtBQUFBLGFBTkY7QUFPRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sT0FBMUI7QUFBQTtBQUFBLGFBUEY7QUFRRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sVUFBMUI7QUFBQTtBQUFBO0FBUkYsV0FGRjtBQVlFO0FBQUE7QUFBQSxjQUFRLE1BQUssTUFBYixFQUFvQixNQUFLLE9BQXpCLEVBQWlDLGNBQWpDO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLGNBQVIsRUFBaUIsT0FBTSxFQUF2QjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxXQUExQjtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxNQUExQjtBQUFBO0FBQUEsYUFIRjtBQUlFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxRQUExQjtBQUFBO0FBQUEsYUFKRjtBQUtFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxPQUExQjtBQUFBO0FBQUEsYUFMRjtBQU1FO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxTQUExQjtBQUFBO0FBQUEsYUFORjtBQU9FO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxNQUExQjtBQUFBO0FBQUEsYUFQRjtBQVFFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxTQUExQjtBQUFBO0FBQUEsYUFSRjtBQVNFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxRQUExQjtBQUFBO0FBQUEsYUFURjtBQVVFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxPQUExQjtBQUFBO0FBQUEsYUFWRjtBQVdFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxVQUExQjtBQUFBO0FBQUEsYUFYRjtBQVlFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxTQUExQjtBQUFBO0FBQUEsYUFaRjtBQWFFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxRQUExQjtBQUFBO0FBQUE7QUFiRixXQVpGO0FBMkJFLHlDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFdBQTNCO0FBM0JGO0FBREYsT0FERjtBQWlDRDs7OztFQXZDZ0JDLE1BQU1DLFM7O0FBMkN6QkMsT0FBT0osSUFBUCxHQUFjQSxJQUFkIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvbmV3Q2hhclwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNoYXJhY3RlciBuYW1lLi4uXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyYWNlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiXCI+U2VsZWN0IGEgcmFjZS4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiZHJhZ29uYm9yblwiPkRyYWdvbmJvcm48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImR3YXJmXCI+RHdhcmY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImhhbGYtZWxmXCI+SGFsZi1lbGY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImhhbGYtb3JjXCI+SGFsZi1vcmM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImhhbGZsaW5nXCI+SGFsZmxpbmc8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImh1bWFuXCI+SHVtYW48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cInRpZWZsaW5nXCI+VGllZmxpbmc8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8c2VsZWN0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNsYXNzXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiXCI+U2VsZWN0IGEgY2xhc3MuLi48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImJhcmJhcmlhblwiPkJhcmJhcmlhbjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiYmFyZFwiPkJhcmQ8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImNsZXJpY1wiPkNsZXJpYzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiZHJ1aWRcIj5EcnVpZDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiZmlnaHRlclwiPkZpZ2h0ZXI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cIm1vbmtcIj5Nb25rPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJwYWxhZGluXCI+UGFsYWRpbjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwicmFuZ2VyXCI+UmFuZ2VyPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJyb2d1ZVwiPlJvZ3VlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJzb3JjZXJlclwiPlNvcmNlcmVyPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJ3YXJsb2NrXCI+V2FybG9jazwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwid2l6YXJkXCI+V2l6YXJkPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkdlbmVyYXRlIVwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbndpbmRvdy5Gb3JtID0gRm9ybTsiXX0=