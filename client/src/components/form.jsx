import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.preparePost = this.preparePost.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleRace = this.handleRace.bind(this);
    this.handleClass = this.handleClass.bind(this);
    this.state = {
      name: '',
      race: 'dragonborn',
      class: 'barbarian'
    };
  }

  preparePost(e) {
    e.preventDefault();
    this.props.post(this.state);
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleRace(e, i, val) {
    this.setState({
      race: val
    });
  }

  handleClass(e, i, val) {
    this.setState({
      class: val
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.preparePost}>
          <TextField type="text"
                     name="name"
                     onChange={this.handleName}
                     hintText="Character name..."
                     required />

          <SelectField type="text"
                       name="race"
                       value={this.state.race}
                       onChange={this.handleRace}
                       floatingLabelText="Race:">
            <MenuItem type="text" value="Dragonborn" primaryText="Dragonborn" />
            <MenuItem type="text" value="Drawf" primaryText="Dwarf" />
            <MenuItem type="text" value="Elf" primaryText="Elf" />
            <MenuItem type="text" value="Gnome" primaryText="Gnome" />
            <MenuItem type="text" value="Half-elf" primaryText="Half-elf" />
            <MenuItem type="text" value="Half-orc" primaryText="Half-orc" />
            <MenuItem type="text" value="Halfling" primaryText="Halfling" />
            <MenuItem type="text" value="Human" primaryText="Human" />
            <MenuItem type="text" value="Tiefling" primaryText="Tiefling" />
          </SelectField>

          <SelectField type="text"
                       name="class"
                       value={this.state.class}
                       onChange={this.handleClass}
                       floatingLabelText="Class:">
            <MenuItem type="text" value="Barbarian" primaryText="Barbarian" />
            <MenuItem type="text" value="Bard" primaryText="Bard" />
            <MenuItem type="text" value="Cleric" primaryText="Cleric" />
            <MenuItem type="text" value="Druid" primaryText="Druid" />
            <MenuItem type="text" value="Fighter" primaryText="Fighter" />
            <MenuItem type="text" value="Monk" primaryText="Monk" />
            <MenuItem type="text" value="paladin" primaryText="Paladin" />
            <MenuItem type="text" value="Ranger" primaryText="Ranger" />
            <MenuItem type="text" value="Rogue" primaryText="Rogue" />
            <MenuItem type="text" value="Sorcerer" primaryText="Sorcerer" />
            <MenuItem type="text" value="Warlock" primaryText="Warlock" />
            <MenuItem type="text" value="Wizard" primaryText="Wizard" />
          </SelectField>

          <RaisedButton primary={true} label="Generate!" type="submit" />
        </form>
      </div>
    )
  }

}

export default Form;