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
              { type: "text", value: "elf" },
              "Elf"
            ),
            React.createElement(
              "option",
              { type: "text", value: "gnome" },
              "Gnome"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0uanN4Il0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBTUEsSTs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1R0FDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQU0sUUFBTyxNQUFiLEVBQW9CLFFBQU8sVUFBM0I7QUFDRSxpRUFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxNQUF4QixrREFBb0MsTUFBcEMsd0RBQXVELG1CQUF2RCxrRkFERjtBQUVFO0FBQUE7QUFBQSxjQUFRLE1BQUssTUFBYixFQUFvQixjQUFwQjtBQUNFO0FBQUE7QUFBQSxnQkFBUSxjQUFSLEVBQWlCLE9BQU0sRUFBdkI7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sWUFBMUI7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sT0FBMUI7QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sS0FBMUI7QUFBQTtBQUFBLGFBSkY7QUFLRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sT0FBMUI7QUFBQTtBQUFBLGFBTEY7QUFNRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sVUFBMUI7QUFBQTtBQUFBLGFBTkY7QUFPRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sVUFBMUI7QUFBQTtBQUFBLGFBUEY7QUFRRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sVUFBMUI7QUFBQTtBQUFBLGFBUkY7QUFTRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sT0FBMUI7QUFBQTtBQUFBLGFBVEY7QUFVRTtBQUFBO0FBQUEsZ0JBQVEsTUFBSyxNQUFiLEVBQW9CLE9BQU0sVUFBMUI7QUFBQTtBQUFBO0FBVkYsV0FGRjtBQWNFO0FBQUE7QUFBQSxjQUFRLE1BQUssTUFBYixFQUFvQixNQUFLLE9BQXpCLEVBQWlDLGNBQWpDO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLGNBQVIsRUFBaUIsT0FBTSxFQUF2QjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxXQUExQjtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxNQUExQjtBQUFBO0FBQUEsYUFIRjtBQUlFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxRQUExQjtBQUFBO0FBQUEsYUFKRjtBQUtFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxPQUExQjtBQUFBO0FBQUEsYUFMRjtBQU1FO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxTQUExQjtBQUFBO0FBQUEsYUFORjtBQU9FO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxNQUExQjtBQUFBO0FBQUEsYUFQRjtBQVFFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxTQUExQjtBQUFBO0FBQUEsYUFSRjtBQVNFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxRQUExQjtBQUFBO0FBQUEsYUFURjtBQVVFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxPQUExQjtBQUFBO0FBQUEsYUFWRjtBQVdFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxVQUExQjtBQUFBO0FBQUEsYUFYRjtBQVlFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxTQUExQjtBQUFBO0FBQUEsYUFaRjtBQWFFO0FBQUE7QUFBQSxnQkFBUSxNQUFLLE1BQWIsRUFBb0IsT0FBTSxRQUExQjtBQUFBO0FBQUE7QUFiRixXQWRGO0FBNkJFLHlDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFdBQTNCO0FBN0JGO0FBREYsT0FERjtBQW1DRDs7OztFQXpDZ0JDLE1BQU1DLFM7O0FBNkN6QkMsT0FBT0osSUFBUCxHQUFjQSxJQUFkIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvbmV3Q2hhclwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNoYXJhY3RlciBuYW1lLi4uXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyYWNlXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiXCI+U2VsZWN0IGEgcmFjZS4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiZHJhZ29uYm9yblwiPkRyYWdvbmJvcm48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImR3YXJmXCI+RHdhcmY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImVsZlwiPkVsZjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiZ25vbWVcIj5Hbm9tZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiaGFsZi1lbGZcIj5IYWxmLWVsZjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiaGFsZi1vcmNcIj5IYWxmLW9yYzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiaGFsZmxpbmdcIj5IYWxmbGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiaHVtYW5cIj5IdW1hbjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwidGllZmxpbmdcIj5UaWVmbGluZzwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxzZWxlY3QgdHlwZT1cInRleHRcIiBuYW1lPVwiY2xhc3NcIiByZXF1aXJlZD5cbiAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJcIj5TZWxlY3QgYSBjbGFzcy4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiYmFyYmFyaWFuXCI+QmFyYmFyaWFuPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJiYXJkXCI+QmFyZDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiY2xlcmljXCI+Q2xlcmljPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJkcnVpZFwiPkRydWlkPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJmaWdodGVyXCI+RmlnaHRlcjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwibW9ua1wiPk1vbms8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cInBhbGFkaW5cIj5QYWxhZGluPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJyYW5nZXJcIj5SYW5nZXI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cInJvZ3VlXCI+Um9ndWU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cInNvcmNlcmVyXCI+U29yY2VyZXI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cIndhcmxvY2tcIj5XYXJsb2NrPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJ3aXphcmRcIj5XaXphcmQ8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR2VuZXJhdGUhXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxud2luZG93LkZvcm0gPSBGb3JtOyJdfQ==