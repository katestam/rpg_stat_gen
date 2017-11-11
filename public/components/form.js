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
                { type: 'text', defaultValue: true, value: 'dragonborn' },
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
                { type: 'text', defaultValue: true, value: 'barbarian' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0uanN4Il0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsInJhY2UiLCJjbGFzcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJlcGFyZVBvc3QiLCJiaW5kIiwiaGFuZGxlTmFtZSIsImhhbmRsZVJhY2UiLCJoYW5kbGVDbGFzcyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBREs7QUFFWEMsWUFBTSxFQUZLO0FBR1hDLGFBQU87QUFISSxLQUFiO0FBRmlCO0FBT2xCOzs7O2dDQUVXQyxDLEVBQUc7QUFDYkEsUUFBRUMsY0FBRjtBQUNBLFdBQUtOLEtBQUwsQ0FBV08sSUFBWCxDQUFnQixLQUFLTixLQUFyQjtBQUNEOzs7K0JBRVVJLEMsRUFBRztBQUNaLFdBQUtHLFFBQUwsQ0FBYztBQUNaTixjQUFNRyxFQUFFSSxNQUFGLENBQVNDO0FBREgsT0FBZDtBQUdEOzs7K0JBRVVMLEMsRUFBRztBQUNaLFdBQUtHLFFBQUwsQ0FBYztBQUNaTCxjQUFNRSxFQUFFSSxNQUFGLENBQVNDO0FBREgsT0FBZDtBQUdEOzs7Z0NBRVdMLEMsRUFBRztBQUNiLFdBQUtHLFFBQUwsQ0FBYztBQUNaSixlQUFPQyxFQUFFSSxNQUFGLENBQVNDO0FBREosT0FBZDtBQUdEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFNLFVBQVUsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBaEI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUNFLDJDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLE1B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QUFkIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcmFjZTogJycsXG4gICAgICBjbGFzczogJydcbiAgICB9O1xuICB9XG5cbiAgcHJlcGFyZVBvc3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnBvc3QodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVOYW1lKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5hbWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVSYWNlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHJhY2U6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGFzcyhlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjbGFzczogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMucHJlcGFyZVBvc3QuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGxhYmVsPkNoYXJhY3RlciBuYW1lOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lLmJpbmQodGhpcyl9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgIDxsYWJlbD5SYWNlOlxuICAgICAgICAgICAgPHNlbGVjdCB0eXBlPVwidGV4dFwiIG5hbWU9XCJyYWNlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUmFjZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZSB2YWx1ZT1cImRyYWdvbmJvcm5cIj5EcmFnb25ib3JuPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImR3YXJmXCI+RHdhcmY8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiZWxmXCI+RWxmPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImdub21lXCI+R25vbWU8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiaGFsZi1lbGZcIj5IYWxmLWVsZjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJoYWxmLW9yY1wiPkhhbGYtb3JjPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImhhbGZsaW5nXCI+SGFsZmxpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiaHVtYW5cIj5IdW1hbjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJ0aWVmbGluZ1wiPlRpZWZsaW5nPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgPGxhYmVsPkNsYXNzOlxuICAgICAgICAgICAgPHNlbGVjdCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjbGFzc1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNsYXNzLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlIHZhbHVlPVwiYmFyYmFyaWFuXCI+QmFyYmFyaWFuPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImJhcmRcIj5CYXJkPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImNsZXJpY1wiPkNsZXJpYzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJkcnVpZFwiPkRydWlkPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cImZpZ2h0ZXJcIj5GaWdodGVyPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cIm1vbmtcIj5Nb25rPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cInBhbGFkaW5cIj5QYWxhZGluPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cInJhbmdlclwiPlJhbmdlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJyb2d1ZVwiPlJvZ3VlPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdHlwZT1cInRleHRcIiB2YWx1ZT1cInNvcmNlcmVyXCI+U29yY2VyZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwid2FybG9ja1wiPldhcmxvY2s8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB0eXBlPVwidGV4dFwiIHZhbHVlPVwid2l6YXJkXCI+V2l6YXJkPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSFcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG53aW5kb3cuRm9ybSA9IEZvcm07Il19