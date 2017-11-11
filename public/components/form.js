'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.state = {
      name: '',
      race: '',
      class: ''
    };
    return _this;
  }

  _createClass(Form, [{
    key: 'preparePost',
    value: function preparePost(e) {
      e.preventDefault();
      this.props.post(this.state);
    }
  }, {
    key: 'handleName',
    value: function handleName(e) {
      this.setState({
        name: e.target.value
      });
    }
  }, {
    key: 'handleRace',
    value: function handleRace(e) {
      this.setState({
        race: e.target.value
      });
    }
  }, {
    key: 'handleClass',
    value: function handleClass(e) {
      this.setState({
        class: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.preparePost.bind(this) },
          React.createElement(
            'label',
            null,
            'Character name:',
            React.createElement('input', { type: 'text', name: 'name', onChange: this.handleName.bind(this), required: true })
          ),
          React.createElement(
            'label',
            null,
            'Race:',
            React.createElement(
              'select',
              { type: 'text', name: 'race', onChange: this.handleRace.bind(this) },
              React.createElement(
                'option',
                { type: 'text', value: 'dragonborn' },
                'Dragonborn'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'dwarf' },
                'Dwarf'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'elf' },
                'Elf'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'gnome' },
                'Gnome'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'half-elf' },
                'Half-elf'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'half-orc' },
                'Half-orc'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'halfling' },
                'Halfling'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'human' },
                'Human'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'tiefling' },
                'Tiefling'
              )
            )
          ),
          React.createElement(
            'label',
            null,
            'Class:',
            React.createElement(
              'select',
              { type: 'text', name: 'class', onChange: this.handleClass.bind(this) },
              React.createElement(
                'option',
                { type: 'text', value: 'barbarian' },
                'Barbarian'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'bard' },
                'Bard'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'cleric' },
                'Cleric'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'druid' },
                'Druid'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'fighter' },
                'Fighter'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'monk' },
                'Monk'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'paladin' },
                'Paladin'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'ranger' },
                'Ranger'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'rogue' },
                'Rogue'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'sorcerer' },
                'Sorcerer'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'warlock' },
                'Warlock'
              ),
              React.createElement(
                'option',
                { type: 'text', value: 'wizard' },
                'Wizard'
              )
            )
          ),
          React.createElement('input', { type: 'submit', value: 'Generate!' })
        )
      );
    }
  }]);

  return Form;
}(React.Component);

window.Form = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0uanN4Il0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsInJhY2UiLCJjbGFzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJlcGFyZVBvc3QiLCJiaW5kIiwiaGFuZGxlTmFtZSIsImhhbmRsZVJhY2UiLCJoYW5kbGVDbGFzcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEMsWUFBTSxFQUZLO0FBR1hDLGFBQU87QUFISSxLQUFiO0FBRmlCO0FBT2xCOzs7O2dDQUVXQyxDLEVBQUc7QUFDYkEsUUFBRUMsY0FBRjtBQUNBLFdBQUtOLEtBQUwsQ0FBV08sSUFBWCxDQUFnQixLQUFLTixLQUFyQjtBQUNEOzs7K0JBRVVJLEMsRUFBRztBQUNaLFdBQUtHLFFBQUwsQ0FBYztBQUNaTixjQUFNRyxFQUFFSSxNQUFGLENBQVNDO0FBREgsT0FBZDtBQUdEOzs7K0JBRVVMLEMsRUFBRztBQUNaLFdBQUtHLFFBQUwsQ0FBYztBQUNaTCxjQUFNRSxFQUFFSSxNQUFGLENBQVNDO0FBREgsT0FBZDtBQUdEOzs7Z0NBRVdMLEMsRUFBRztBQUNiLFdBQUtHLFFBQUwsQ0FBYztBQUNaSixlQUFPQyxFQUFFSSxNQUFGLENBQVNDO0FBREosT0FBZDtBQUdEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFNLFVBQVUsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBaEI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUNFLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1B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cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHJhY2U6ICcnLFxuICAgICAgY2xhc3M6ICcnXG4gICAgfTtcbiAgfVxuXG4gIHByZXBhcmVQb3N0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5wb3N0KHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgaGFuZGxlTmFtZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuYW1lOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUmFjZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICByYWNlOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xhc3MoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2xhc3M6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnByZXBhcmVQb3N0LmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxsYWJlbD5DaGFyYWN0ZXIgbmFtZTpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZS5iaW5kKHRoaXMpfSByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICA8bGFiZWw+UmFjZTpcbiAgICAgICAgICAgIDxzZWxlY3QgdHlwZT1cInRleHRcIiBuYW1lPVwicmFjZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJhY2UuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImRyYWdvbmJvcm5cIj5EcmFnb25ib3JuPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImR3YXJmXCI+RHdhcmY8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiZWxmXCI+RWxmPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImdub21lXCI+R25vbWU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiaGFsZi1lbGZcIj5IYWxmLWVsZjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJoYWxmLW9yY1wiPkhhbGYtb3JjPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImhhbGZsaW5nXCI+SGFsZmxpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiaHVtYW5cIj5IdW1hbjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJ0aWVmbGluZ1wiPlRpZWZsaW5nPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgPGxhYmVsPkNsYXNzOlxuICAgICAgICAgICAgPHNlbGVjdCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjbGFzc1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNsYXNzLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJiYXJiYXJpYW5cIj5CYXJiYXJpYW48L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiYmFyZFwiPkJhcmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiY2xlcmljXCI+Q2xlcmljPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImRydWlkXCI+RHJ1aWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiZmlnaHRlclwiPkZpZ2h0ZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwibW9ua1wiPk1vbms8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwicGFsYWRpblwiPlBhbGFkaW48L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwicmFuZ2VyXCI+UmFuZ2VyPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cInJvZ3VlXCI+Um9ndWU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwic29yY2VyZXJcIj5Tb3JjZXJlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJ3YXJsb2NrXCI+V2FybG9jazwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJ3aXphcmRcIj5XaXphcmQ8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkdlbmVyYXRlIVwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbndpbmRvdy5Gb3JtID0gRm9ybTsiXX0=