import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Character from './character.jsx';

var Char_display = function(props) {

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
      {props.characters.map(function(char) {
        return <Character char={char} />
      })}
        </TableBody>
      </Table>
    </div>
  )
}

export default Char_display;