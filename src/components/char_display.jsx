var Char_display = function(props) {

  return (
    <div>
      {props.characters.map(function(char) {
        return <Character char={char} />
      })}
    </div>
  )
}

window.Char_display = Char_display;