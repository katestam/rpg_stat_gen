import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

var Character = function(props) {
  return (

    <div>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Race</TableHeaderColumn>
            <TableHeaderColumn>Class</TableHeaderColumn>
            <TableHeaderColumn>Strength</TableHeaderColumn>
            <TableHeaderColumn>Dexterity</TableHeaderColumn>
            <TableHeaderColumn>Constitution</TableHeaderColumn>
            <TableHeaderColumn>Intelligence</TableHeaderColumn>
            <TableHeaderColumn>Wisdom</TableHeaderColumn>
            <TableHeaderColumn>Charisma</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>{props.char.name}</TableRowColumn>
            <TableRowColumn>{props.char.race}</TableRowColumn>
            <TableRowColumn>{props.char.class}</TableRowColumn>
            <TableRowColumn>{props.char.strength}</TableRowColumn>
            <TableRowColumn>{props.char.dexterity}</TableRowColumn>
            <TableRowColumn>{props.char.constitution}</TableRowColumn>
            <TableRowColumn>{props.char.intelligence}</TableRowColumn>
            <TableRowColumn>{props.char.wisdom}</TableRowColumn>
            <TableRowColumn>{props.char.charisma}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    )
}

export default Character;