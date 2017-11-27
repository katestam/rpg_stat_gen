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
    )
}

export default Character;