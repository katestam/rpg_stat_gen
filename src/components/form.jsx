class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form method="POST" action="/newChar">
          <input type="text" name="name" type="text" placeholder="Character name..." required />
          <select name="race" required>
            <option selected value="">Select a race...</option>
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
          <select type="text" name="class" required>
            <option selected value="">Select a class...</option>
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
          <input type="submit" value="Generate!" />
        </form>
      </div>
    )
  }

}

window.Form = Form;