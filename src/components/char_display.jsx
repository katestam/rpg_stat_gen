class Char_display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.characters}
      </div>
    )
  }
}

window.Char_display = Char_display;