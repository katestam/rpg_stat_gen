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
          null,
          React.createElement('input', { type: 'text', name: 'name', onChange: this.handleName.bind(this), placeholder: 'Character name...', required: true }),
          React.createElement(
            'select',
            { type: 'text', name: 'race', onChange: this.handleRace.bind(this), required: true },
            React.createElement(
              'option',
              { selected: true, value: '' },
              'Select a race...'
            ),
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
          ),
          React.createElement(
            'select',
            { type: 'text', name: 'class', onChange: this.handleClass.bind(this), required: true },
            React.createElement(
              'option',
              { selected: true, value: '' },
              'Select a class...'
            ),
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
          ),
          React.createElement('input', { type: 'submit', value: 'Generate!', onClick: this.preparePost.bind(this) })
        )
      );
    }
  }]);

  return Form;
}(React.Component);

window.Form = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0uanN4Il0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsInJhY2UiLCJjbGFzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTmFtZSIsImJpbmQiLCJoYW5kbGVSYWNlIiwiaGFuZGxlQ2xhc3MiLCJwcmVwYXJlUG9zdCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEMsWUFBTSxFQUZLO0FBR1hDLGFBQU87QUFISSxLQUFiO0FBRmlCO0FBT2xCOzs7O2dDQUVXQyxDLEVBQUc7QUFDYkEsUUFBRUMsY0FBRjtBQUNBLFdBQUtOLEtBQUwsQ0FBV08sSUFBWCxDQUFnQixLQUFLTixLQUFyQjtBQUNEOzs7K0JBRVVJLEMsRUFBRztBQUNaLFdBQUtHLFFBQUwsQ0FBYztBQUNaTixjQUFNRyxFQUFFSSxNQUFGLENBQVNDO0FBREgsT0FBZDtBQUdEOzs7K0JBRVVMLEMsRUFBRztBQUNaLFdBQUtHLFFBQUwsQ0FBYztBQUNaTCxjQUFNRSxFQUFFSSxNQUFGLENBQVNDO0FBREgsT0FBZDtBQUdEOzs7Z0NBRVdMLEMsRUFBRztBQUNiLFdBQUtHLFFBQUwsQ0FBYztBQUNaSixlQUFPQyxFQUFFSSxNQUFGLENBQVNDO0FBREosT0FBZDtBQUdEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHlDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1BQXhCLEVBQStCLFVBQVUsS0FBS0MsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBekMsRUFBcUUsYUFBWSxtQkFB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O0FBbUNEOzs7O0VBckVnQkksTUFBTUMsUzs7QUF5RXpCQyxPQUFPbkIsSUFBUCxHQUFjQSxJQUFkIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcmFjZTogJycsXG4gICAgICBjbGFzczogJydcbiAgICB9O1xuICB9XG5cbiAgcHJlcGFyZVBvc3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnBvc3QodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVOYW1lKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5hbWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVSYWNlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJhY2U6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGFzcyhlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjbGFzczogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiQ2hhcmFjdGVyIG5hbWUuLi5cIiByZXF1aXJlZCAvPlxuICAgICAgICAgIDxzZWxlY3QgdHlwZT1cInRleHRcIiBuYW1lPVwicmFjZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJhY2UuYmluZCh0aGlzKX0gcmVxdWlyZWQ+XG4gICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiXCI+U2VsZWN0IGEgcmFjZS4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiZHJhZ29uYm9yblwiPkRyYWdvbmJvcm48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImR3YXJmXCI+RHdhcmY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImVsZlwiPkVsZjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiZ25vbWVcIj5Hbm9tZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiaGFsZi1lbGZcIj5IYWxmLWVsZjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiaGFsZi1vcmNcIj5IYWxmLW9yYzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiaGFsZmxpbmdcIj5IYWxmbGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiaHVtYW5cIj5IdW1hbjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwidGllZmxpbmdcIj5UaWVmbGluZzwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxzZWxlY3QgdHlwZT1cInRleHRcIiBuYW1lPVwiY2xhc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDbGFzcy5iaW5kKHRoaXMpfSByZXF1aXJlZD5cbiAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJcIj5TZWxlY3QgYSBjbGFzcy4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiYmFyYmFyaWFuXCI+QmFyYmFyaWFuPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJiYXJkXCI+QmFyZDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiY2xlcmljXCI+Q2xlcmljPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJkcnVpZFwiPkRydWlkPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJmaWdodGVyXCI+RmlnaHRlcjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwibW9ua1wiPk1vbms8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cInBhbGFkaW5cIj5QYWxhZGluPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJyYW5nZXJcIj5SYW5nZXI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cInJvZ3VlXCI+Um9ndWU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cInNvcmNlcmVyXCI+U29yY2VyZXI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cIndhcmxvY2tcIj5XYXJsb2NrPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJ3aXphcmRcIj5XaXphcmQ8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR2VuZXJhdGUhXCIgb25DbGljaz17dGhpcy5wcmVwYXJlUG9zdC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG53aW5kb3cuRm9ybSA9IEZvcm07Il19