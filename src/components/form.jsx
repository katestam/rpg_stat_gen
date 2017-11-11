class Form extends React.Component {
  constructor(props) {
    super(props);
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

  handleRace(e) {
    this.setState({
      race: e.target.value
    });
  }

  handleClass(e) {
    this.setState({
      class: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.preparePost.bind(this)}>
          <label>Character name:
            <input type="text" name="name" onChange={this.handleName.bind(this)} required />
          </label>

          <label>Race:
            <select type="text" name="race" onChange={this.handleRace.bind(this)}>
              <option type="text" value="dragonborn">Dragonborn</option>
              <option type="text" value="dwarf">Dwarf</option>
              <option type="text" value="elf">Elf</option>
              <option type="text" value="gnome">Gnome</option>
              <option type="text" value="half-elf">Half-elf</option>
              <option type="text" value="half-orc">Half-orc</option>
              <option type="text" value="halfling">Halfling</option>
              <option type="text" value="human">Human</option>
              <option type="text" value="tiefling">Tiefling</option>
            </select>
          </label>

          <label>Class:
            <select type="text" name="class" onChange={this.handleClass.bind(this)}>
              <option type="text" value="barbarian">Barbarian</option>
              <option type="text" value="bard">Bard</option>
              <option type="text" value="cleric">Cleric</option>
              <option type="text" value="druid">Druid</option>
              <option type="text" value="fighter">Fighter</option>
              <option type="text" value="monk">Monk</option>
              <option type="text" value="paladin">Paladin</option>
              <option type="text" value="ranger">Ranger</option>
              <option type="text" value="rogue">Rogue</option>
              <option type="text" value="sorcerer">Sorcerer</option>
              <option type="text" value="warlock">Warlock</option>
              <option type="text" value="wizard">Wizard</option>
            </select>
          </label>
          <input type="submit" value="Generate!" />
        </form>
      </div>
    )
  }

}

window.Form = Form;