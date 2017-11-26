import React from 'react';
import Character from './character.jsx';

var Char_display = function(props) {

  return (
    <div>
      {props.characters.map(function(char) {
        return <Character char={char} />
      })}
    </div>
  )
}

export default Char_display;