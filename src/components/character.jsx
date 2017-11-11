var Character = function(props) {
  return (

    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Race</td>
            <td>Class</td>
            <td>Strength</td>
            <td>Dexterity</td>
            <td>Constitution</td>
            <td>Intelligence</td>
            <td>Wisdom</td>
            <td>Charisma</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.char.name}</td>
            <td>{props.char.race}</td>
            <td>{props.char.class}</td>
            <td>{props.char.strength}</td>
            <td>{props.char.dexterity}</td>
            <td>{props.char.constitution}</td>
            <td>{props.char.intelligence}</td>
            <td>{props.char.wisdom}</td>
            <td>{props.char.charisma}</td>
          </tr>
        </tbody>
      </table>
    </div>

    )
}

window.Character = Character;