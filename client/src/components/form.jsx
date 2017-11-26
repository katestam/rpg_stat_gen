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
            <MenuItem type="text" value="dragonborn" primaryText="Dragonborn" />
            <MenuItem type="text" value="drawf" primaryText="Dwarf" />
            <MenuItem type="text" value="elf" primaryText="Elf" />
            <MenuItem type="text" value="gnome" primaryText="Gnome" />
            <MenuItem type="text" value="half-elf" primaryText="Half-elf" />
            <MenuItem type="text" value="half-orc" primaryText="Half-orc" />
            <MenuItem type="text" value="halfling" primaryText="Halfling" />
            <MenuItem type="text" value="human" primaryText="Human" />
            <MenuItem type="text" value="tiefling" primaryText="Tiefling" />
          </SelectField>

          <SelectField type="text"
                       name="class"
                       value={this.state.class}
                       onChange={this.handleClass}
                       floatingLabelText="Class:">
            <MenuItem type="text" value="barbarian" primaryText="Barbarian" />
            <MenuItem type="text" value="bard" primaryText="Bard" />
            <MenuItem type="text" value="cleric" primaryText="Cleric" />
            <MenuItem type="text" value="druid" primaryText="Druid" />
            <MenuItem type="text" value="fighter" primaryText="Fighter" />
            <MenuItem type="text" value="monk" primaryText="Monk" />
            <MenuItem type="text" value="paladin" primaryText="Paladin" />
            <MenuItem type="text" value="ranger" primaryText="Ranger" />
            <MenuItem type="text" value="rogue" primaryText="Rogue" />
            <MenuItem type="text" value="sorcerer" primaryText="Sorcerer" />
            <MenuItem type="text" value="warlock" primaryText="Warlock" />
            <MenuItem type="text" value="wizard" primaryText="Wizard" />
          </SelectField>

          <RaisedButton primary={true} label="Generate!" type="submit" />
        </form>
      </div>
    )
  }

}

export default Form;