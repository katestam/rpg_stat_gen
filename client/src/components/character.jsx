import React from 'react';

var Character = function(props) {
  return (

    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Race</th>
            <th>Class</th>
            <th>Strength</th>
            <th>Dexterity</th>
            <th>Constitution</th>
            <th>Intelligence</th>
            <th>Wisdom</th>
            <th>Charisma</th>
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

export default Character;