"use strict";

var Character = function Character(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            null,
            "Name"
          ),
          React.createElement(
            "td",
            null,
            "Race"
          ),
          React.createElement(
            "td",
            null,
            "Class"
          ),
          React.createElement(
            "td",
            null,
            "Strength"
          ),
          React.createElement(
            "td",
            null,
            "Dexterity"
          ),
          React.createElement(
            "td",
            null,
            "Constitution"
          ),
          React.createElement(
            "td",
            null,
            "Intelligence"
          ),
          React.createElement(
            "td",
            null,
            "Wisdom"
          ),
          React.createElement(
            "td",
            null,
            "Charisma"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            null,
            props.char.name
          ),
          React.createElement(
            "td",
            null,
            props.char.race
          ),
          React.createElement(
            "td",
            null,
            props.char.class
          ),
          React.createElement(
            "td",
            null,
            props.char.strength
          ),
          React.createElement(
            "td",
            null,
            props.char.dexterity
          ),
          React.createElement(
            "td",
            null,
            props.char.constitution
          ),
          React.createElement(
            "td",
            null,
            props.char.intelligence
          ),
          React.createElement(
            "td",
            null,
            props.char.wisdom
          ),
          React.createElement(
            "td",
            null,
            props.char.charisma
          )
        )
      )
    )
  );
};

window.Character = Character;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2NoYXJhY3Rlci5qc3giXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwicHJvcHMiLCJjaGFyIiwibmFtZSIsInJhY2UiLCJjbGFzcyIsInN0cmVuZ3RoIiwiZGV4dGVyaXR5IiwiY29uc3RpdHV0aW9uIiwiaW50ZWxsaWdlbmNlIiwid2lzZG9tIiwiY2hhcmlzbWEiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsWUFBWSxTQUFaQSxTQUFZLENBQVNDLEtBQVQsRUFBZ0I7QUFDOUIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTEY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBUEY7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBUkY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFERixPQURGO0FBY0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtBLGtCQUFNQyxJQUFOLENBQVdDO0FBQWhCLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBS0Ysa0JBQU1DLElBQU4sQ0FBV0U7QUFBaEIsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFLSCxrQkFBTUMsSUFBTixDQUFXRztBQUFoQixXQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUtKLGtCQUFNQyxJQUFOLENBQVdJO0FBQWhCLFdBSkY7QUFLRTtBQUFBO0FBQUE7QUFBS0wsa0JBQU1DLElBQU4sQ0FBV0s7QUFBaEIsV0FMRjtBQU1FO0FBQUE7QUFBQTtBQUFLTixrQkFBTUMsSUFBTixDQUFXTTtBQUFoQixXQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUtQLGtCQUFNQyxJQUFOLENBQVdPO0FBQWhCLFdBUEY7QUFRRTtBQUFBO0FBQUE7QUFBS1Isa0JBQU1DLElBQU4sQ0FBV1E7QUFBaEIsV0FSRjtBQVNFO0FBQUE7QUFBQTtBQUFLVCxrQkFBTUMsSUFBTixDQUFXUztBQUFoQjtBQVRGO0FBREY7QUFkRjtBQURGLEdBRkY7QUFrQ0QsQ0FuQ0Q7O0FBcUNBQyxPQUFPWixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJjaGFyYWN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ2hhcmFjdGVyID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+TmFtZTwvdGQ+XG4gICAgICAgICAgICA8dGQ+UmFjZTwvdGQ+XG4gICAgICAgICAgICA8dGQ+Q2xhc3M8L3RkPlxuICAgICAgICAgICAgPHRkPlN0cmVuZ3RoPC90ZD5cbiAgICAgICAgICAgIDx0ZD5EZXh0ZXJpdHk8L3RkPlxuICAgICAgICAgICAgPHRkPkNvbnN0aXR1dGlvbjwvdGQ+XG4gICAgICAgICAgICA8dGQ+SW50ZWxsaWdlbmNlPC90ZD5cbiAgICAgICAgICAgIDx0ZD5XaXNkb208L3RkPlxuICAgICAgICAgICAgPHRkPkNoYXJpc21hPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPntwcm9wcy5jaGFyLm5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hhci5yYWNlfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3Byb3BzLmNoYXIuY2xhc3N9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57cHJvcHMuY2hhci5zdHJlbmd0aH08L3RkPlxuICAgICAgICAgICAgPHRkPntwcm9wcy5jaGFyLmRleHRlcml0eX08L3RkPlxuICAgICAgICAgICAgPHRkPntwcm9wcy5jaGFyLmNvbnN0aXR1dGlvbn08L3RkPlxuICAgICAgICAgICAgPHRkPntwcm9wcy5jaGFyLmludGVsbGlnZW5jZX08L3RkPlxuICAgICAgICAgICAgPHRkPntwcm9wcy5jaGFyLndpc2RvbX08L3RkPlxuICAgICAgICAgICAgPHRkPntwcm9wcy5jaGFyLmNoYXJpc21hfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG5cbiAgICApXG59XG5cbndpbmRvdy5DaGFyYWN0ZXIgPSBDaGFyYWN0ZXI7Il19